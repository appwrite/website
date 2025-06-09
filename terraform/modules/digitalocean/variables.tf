variable "private_key" {
  description = "The path to the private key used to SSH into the droplets"
}
variable "project_name" {
  description = "Name for the current infrastructure project"
}
variable "region" {
  description = "The region to deploy the infrastructure to. See https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters"
}
variable "environment" {
  description = "Name of the current environment"
}
variable "base_image" {
  description = "Base Image to use for all droplets"
}
variable "subnet_range" {
  description = "Subnet range for the VPC"
}
variable "worker_size" {
  description = "Size of the NFS node. See https://slugs.do-api.dev/"
}
variable "worker_count" {
  description = "Count of worker nodes required"
}
variable "manager_size" {
  description = "Size of the manager node. See https://slugs.do-api.dev/"
}
variable "manager_count" {
  description = "Count of API nodes required"
}
variable "digitalocean_project_name" {
  description = "Name of the DigitalOcean Project"
}

data "digitalocean_ssh_key" "Christy" {
  name = "Christy"
}

data "external" "swarm_join_token" {
  program = ["${path.module}/get-join-token.sh"]
  query = {
    host = "${digitalocean_droplet.leader.ipv4_address}"
  }
}