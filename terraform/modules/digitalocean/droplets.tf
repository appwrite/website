locals {
  mount_nfs = "/letsencrypt"
  setup_firewall = [
    "ufw allow 2377/tcp",
    "ufw allow 7946/tcp",
    "ufw allow 7946/udp",
    "ufw allow 4789/udp",
    "ufw reload",
    "systemctl restart docker"
  ]
  setup_nfs = [
    "ufw allow 2049",
    "ufw reload",
    "apt install -y nfs-common",
    "mkdir -p ${local.mount_nfs}",
    "echo '${digitalocean_droplet.nfs.ipv4_address_private}:${local.mount_nfs} ${local.mount_nfs} nfs proto=tcp,port=2049,nfsvers=4,sync,noexec,rw 0 0' >> /etc/fstab",
    "mount -a",
  ]
}

resource "digitalocean_project" "homepage" {
  name        = var.digitalocean_project_name
  description = "Appwrite Homepage"
  purpose     = "Web Application"
  environment = "Development"
  resources   = flatten([
    digitalocean_droplet.leader.urn, 
    digitalocean_droplet.manager[*].urn,
    digitalocean_droplet.worker[*].urn,
    digitalocean_droplet.nfs.urn
  ])

  lifecycle {
    ignore_changes = all
  }
}

# Tags
resource "digitalocean_tag" "worker" {
  name = "${var.environment}-worker"
}

resource "digitalocean_tag" "manager" {
  name = "${var.environment}-manager"
}

resource "digitalocean_droplet" "leader" {
  image  = var.base_image
  name   = "${var.project_name}-${var.region}-${var.environment}-leader-0"
  region = var.region
  size   = var.manager_size
  tags   = [digitalocean_tag.manager.id]
  ssh_keys = [
    data.digitalocean_ssh_key.Christy.id
  ]
  vpc_uuid = digitalocean_vpc.subnet.id

  connection {
    host        = self.ipv4_address
    user        = "root"
    type        = "ssh"
    private_key = var.private_key
    timeout     = "2m"
  }

  provisioner "remote-exec" {
    inline = concat(local.setup_firewall, local.setup_nfs, [
      "docker swarm init --advertise-addr ${self.ipv4_address_private}"
    ])
  }
}

resource "digitalocean_droplet" "manager" {
  count  = var.manager_count
  image  = var.base_image
  name   = "${var.project_name}-${var.region}-${var.environment}-manager-${count.index}"
  region = var.region
  size   = var.manager_size
  tags   = [digitalocean_tag.manager.id]
  vpc_uuid = digitalocean_vpc.subnet.id
  ssh_keys = [
    data.digitalocean_ssh_key.Christy.id
  ]

  connection {
    host        = self.ipv4_address
    user        = "root"
    type        = "ssh"
    private_key = var.private_key
    timeout     = "2m"
  }

  provisioner "remote-exec" {
    inline = concat(local.setup_firewall, local.setup_nfs, [
      "docker swarm join --token ${data.external.swarm_join_token.result.manager} ${digitalocean_droplet.leader.ipv4_address_private}:2377"
    ])
  }
}

resource "digitalocean_loadbalancer" "public" {
  name        = "${var.project_name}-${var.region}-${var.environment}"
  region      = var.region
  size_unit   =  1
  project_id  = digitalocean_project.homepage.id
  vpc_uuid    = digitalocean_vpc.subnet.id
  droplet_ids = digitalocean_droplet.manager.*.id

  redirect_http_to_https   = false
  enable_backend_keepalive = true
  enable_proxy_protocol    = true

  forwarding_rule {
    entry_port     = 80
    entry_protocol = "http"

    target_port     = 80
    target_protocol = "http"
  }

  forwarding_rule {
    entry_port     = 443
    entry_protocol = "http2"

    target_port     = 443
    target_protocol = "http2"

    tls_passthrough = true
  }

  healthcheck {
    port                     = 80
    path                     = "/ping"
    protocol                 = "http"
    check_interval_seconds   = 3
    response_timeout_seconds = 3
    unhealthy_threshold      = 5
    healthy_threshold        = 5
  }

  firewall {
    allow = ["cidr:103.21.244.0/22","cidr:103.22.200.0/22","cidr:103.31.4.0/22","cidr:104.16.0.0/13","cidr:104.24.0.0/14","cidr:108.162.192.0/18","cidr:131.0.72.0/22","cidr:141.101.64.0/18","cidr:162.158.0.0/15","cidr:172.64.0.0/13","cidr:173.245.48.0/20","cidr:188.114.96.0/20","cidr:190.93.240.0/20","cidr:197.234.240.0/22","cidr:198.41.128.0/17"]
  }
}

resource "digitalocean_droplet" "worker" {
  count  = var.worker_count
  image  = var.base_image
  name   = "${var.project_name}-${var.region}-${var.environment}-worker-${count.index}"
  region = var.region
  size   = var.worker_size
  tags   = [digitalocean_tag.worker.id]
  vpc_uuid = digitalocean_vpc.subnet.id
  ssh_keys = [
    data.digitalocean_ssh_key.Christy.id
  ]

  connection {
    host        = self.ipv4_address
    user        = "root"
    type        = "ssh"
    private_key = var.private_key
    timeout     = "2m"
  }

  provisioner "remote-exec" {
    inline = concat(local.setup_firewall, [
      "docker swarm join --token ${data.external.swarm_join_token.result.worker} ${digitalocean_droplet.leader.ipv4_address_private}:2377"
    ])
  }
}

resource "digitalocean_droplet" "nfs" {
  image  = var.base_image
  name   = "${var.project_name}-${var.region}-${var.environment}-nfs-0"
  region = var.region
  size   = var.worker_size
  vpc_uuid = digitalocean_vpc.subnet.id
  ssh_keys = [
    data.digitalocean_ssh_key.Christy.id
  ]

  connection {
    host        = self.ipv4_address
    user        = "root"
    type        = "ssh"
    private_key = var.private_key
    timeout     = "2m"
  }

  provisioner "remote-exec" {
    inline = [
      "ufw allow 2049",
      "ufw reload",
      "sudo apt update", 
      "sudo apt install -y nfs-kernel-server",
      "mkdir -p ${local.mount_nfs}",
      "echo '${local.mount_nfs} ${var.subnet_range}(rw,sync,no_root_squash,no_subtree_check)' >> /etc/exports",
      "exportfs -arvf",
      "systemctl restart nfs-kernel-server",
    ]
  }
}