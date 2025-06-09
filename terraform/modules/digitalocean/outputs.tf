output "leader_public_ip" {
  value = digitalocean_droplet.leader.ipv4_address
  description = "The public IP address of the leader node"
}