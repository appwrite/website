module "droplets" {
    source = "../../modules/digitalocean"

    private_key = "${var.PRIVATE_KEY}"
    project_name = "hmp"
    region = "fra1"
    environment = "prd"
    base_image = "docker-20-04"
    worker_size = "s-2vcpu-2gb-amd"
    worker_count = 6
    subnet_range = "10.117.0.0/20"
    manager_size = "s-2vcpu-2gb-amd"
    manager_count = 2

    digitalocean_project_name = "Production - Homepage"
}