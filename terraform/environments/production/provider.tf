terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
  cloud {
    organization = "appwrite"
    workspaces {
      name = "production-homepage"
    }
  }
}

provider "digitalocean" {
  token = var.DO_TOKEN
}