# Braintrust on Docker

This folder contains configurations for deploying a standalone version of
Braintrust on docker. See the
[docs](https://www.braintrustdata.com/docs/self-hosting/docker) page for full
details.

## Hybrid Deployment

This repository is one of several ways to deploy the Braintrust Self Hosted Data Plane. Besides this docker compose, we also support AWS, Azure, and Google with fully supported Terraform Modules and a helm chart as well.
<https://github.com/braintrustdata/terraform-aws-braintrust-data-plane>
<https://github.com/braintrustdata/terraform-azure-braintrust-data-plane>
<https://github.com/braintrustdata/terraform-google-braintrust-data-plane>
<https://github.com/braintrustdata/helm>

This repository contains the hybrid deployment, which stores all your data in your own data plane, while using our globally hosted control plane which powers the UI, authentication, and metadata.
