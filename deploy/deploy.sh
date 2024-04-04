#!/bin/bash

# ------------------------------ Params -------------------------------

host=${1-'127.0.0.1'}
echo "Host address is: $host"

current_dir=$(dirname "$0")

# ------------------------------ Params -------------------------------

image_tag=portfolio
container_name=portfolio

# --------------------------- Deployment begins ---------------------------
#--------------------------------------------------------------------------

# ---------------------------- Install Docker -----------------------------
#--------------------------------------------------------------------------

if ! command -v "docker" >/dev/null; then
    echo "Docker is not installed"
    echo Install Docker

    #-------------------------------------------------------------------
    sudo apt-get update
    sudo apt-get install -y ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings

    # 2023B - Update keyring location
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    # Add the repository to Apt sources:
    echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |
        sudo tee /etc/apt/sources.list.d/docker.list >/dev/null

    sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    sudo systemctl start docker
    sudo systemctl enable docker
else
    echo "Docker installed"
    docker --version
fi

# ---------------------------- Install Docker -----------------------------
#--------------------------------------------------------------------------

# ------------------------- Deploy TPF Backend ----------------------------
#--------------------------------------------------------------------------
# Build docker image
docker build -t ${image_tag} -f ../Dockerfile ..
# docker images

#-------------------------------------------------------------------
# Start the Runner container by using local system volume mounts
if [ ! "$(docker ps -q -f name=$container_name)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=$container_name)" ]; then
        # cleanup
        docker rm $container_name
    fi
    # run container
    docker run --network="host" --name="${container_name}" -d \
        ${image_tag}
fi
