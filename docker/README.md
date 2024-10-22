# Braintrust on Docker

This folder contains configurations for deploying a standalone version of
Braintrust on docker. See the
[docs](https://www.braintrustdata.com/docs/self-hosting/docker) page for full
details.

## API vs. full deployment

This repository contains the hybrid API deployment mode, which keeps data in your environment and falls back
to our globally hosted control plane which powers the UI, authentication, and metadata. In almost all cases, the
API deployment is the best option and offers an attractive balance of low overhead and security.

If you're looking for the "full deployment" mode, please reach out to [support](mailto:support@braintrustdata.com).
