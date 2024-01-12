# Braintrust on Docker

This folder contains configurations for deploying a standalone version of
Braintrust on docker. See the
[docs](https://www.braintrustdata.com/docs/self-hosting/docker) page for full
details.

In order to get started, simply adjust any of the environment variables in the
`.env` file, and copy the docker compose file you wish to run to `compose.yml`
in the same directory. Make sure `.env` and `compose.yml` are in the same
directory when launching containers. You can then pull the latest images and
launch the containers with `docker compose`:

```
docker compose pull
docker compose up -d --remove-orphans`
```

The services can be shutdown with `docker compose` as well:

```
docker compose down
```

See below for more details on each configuration type.

## API Configuration

The API configuration runs just the backend data server of Braintrust. It
corresponds to the "Customer Cloud" portion of the
[architecture](https://www.Braintrustdata.com/docs/platform/architecture). Use
this configuration to host your own backend server on a deployment of your
choosing, while still using the production components of the rest of Braintrust.

To start using the server, simply sign into braintrust at `braintrustdata.com`.
If this is your first time using braintrust, you may want to go through the
[quickstart](https://www.braintrustdata.com/docs) guide.

In order to point your organization to your docker API server, visit the
settings page and click on "API URL" on the left sidebar. Enter the URL of your
server. Note: the docker server defaults to `http://localhost:8000`, which will
work as long as the browser is running on the same machine as the API server.

![API URL settings page](images/settings_api_url.png)

If the browser is successfully able to connect to your server, you should see
the message "API ping successful".

### Considerations

If you wish to deploy the API server to a non-localhost URL, it will most-likely
need to be exposed on an HTTPS endpoint. A common way to accomplish this is to
obtain an SSL certificate for your domain, and forward traffic to your API
server using a reverse proxy, such as nginx.

## Debugging

The state of the braintrust deployment is fully managed on docker. Therefore, if
something is not running as expected, you should be able to inspect the
container, either by dumping its logs or opening up a shell inside the container
to poke around. For instance, after launching the API server, you should see
three containers:

```
% docker ps
CONTAINER ID   IMAGE                                             COMMAND                  CREATED          STATUS                    PORTS                    NAMES
c67b49727823   public.ecr.aws/braintrust/standalone-api:latest   "python entrypoint_a…"   16 minutes ago   Up 16 minutes             0.0.0.0:8000->8000/tcp   bt-docker-braintrust-standalone-api-1
6ed70334c6cf   public.ecr.aws/braintrust/postgres:latest         "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes (healthy)   0.0.0.0:5532->5432/tcp   bt-docker-braintrust-postgres-1
37840f55bfd5   public.ecr.aws/braintrust/redis:latest            "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes (healthy)   0.0.0.0:6479->6379/tcp   bt-docker-braintrust-redis-1
```

You can dump the logs of the API container using `docker logs [CONTAINER ID]`,
or spawn a shell inside the container using `docker exec -it [CONTAINER ID] bash`.
For further questions, feel free to reach out at support@braintrustdata.com.
