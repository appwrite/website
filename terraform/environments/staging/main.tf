module "droplets" {
    source = "../../modules/digitalocean"

    private_key = "${var.PRIVATE_KEY}"
    project_name = "hmp"
    region = "fra1"
    environment = "stg"
    base_image = "docker-20-04"
    subnet_range = "10.116.0.0/20"
    worker_size = "s-1vcpu-2gb"
    worker_count = 4
    manager_size = "s-1vcpu-2gb"
    manager_count = 2

    digitalocean_project_name = "Staging - Homepage"
}