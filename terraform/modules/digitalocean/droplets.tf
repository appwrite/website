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