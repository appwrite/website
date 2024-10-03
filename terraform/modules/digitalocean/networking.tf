# VPC 
resource "digitalocean_vpc" "subnet" {
  name     = "${var.environment}-subnet"
  region   = var.region
  ip_range = var.subnet_range
}

# Firewall Rules
resource "digitalocean_firewall" "web" {
  name = "${var.environment}-web"
  tags = [digitalocean_tag.worker.id, digitalocean_tag.manager.id]

  # HTTP/HTTPS
  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  # Outbound communication
  outbound_rule {
    protocol              = "tcp"
    port_range            = "all"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
  
  outbound_rule {
    protocol              = "udp"
    port_range            = "all"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "icmp"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}

resource "digitalocean_firewall" "vpc_communication" {
  name = "${var.environment}-vpc-communication"
  droplet_ids = [ digitalocean_droplet.nfs.id ]
  tags = [digitalocean_tag.worker.id, digitalocean_tag.manager.id]

  # Internal communication
  inbound_rule {
    protocol         = "tcp"
    port_range       = "all"
    source_addresses = [var.subnet_range]
  }

  inbound_rule {
    protocol         = "udp"
    port_range       = "all"
    source_addresses = [var.subnet_range]
  }
}

resource "digitalocean_firewall" "ssh" {
  name = "${var.environment}-ssh"
  droplet_ids = [ digitalocean_droplet.nfs.id ]
  tags = [digitalocean_tag.worker.id, digitalocean_tag.manager.id]

  # SSH
  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
}