variable "DO_TOKEN" {
  description = "DigitalOcean API token"
}
variable "PRIVATE_KEY" {
  description = "Contents of your local SSH private key file"
  default = "$(cat ~/.ssh/id_rsa)"
}
