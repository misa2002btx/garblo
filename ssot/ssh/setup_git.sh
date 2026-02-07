#!/bin/bash
KEY_PATH="ssot/ssh/key.pem"

if [ ! -f "$KEY_PATH" ]; then
    echo "Private key not found at $KEY_PATH"
    exit 1
fi
chmod 600 "$KEY_PATH"

# Start ssh-agent if not running
if [ -z "$SSH_AGENT_PID" ]; then
  eval "$(ssh-agent -s)"
fi

FINGERPRINT=$(ssh-keygen -lf "$KEY_PATH" | awk '{print $2}')
if ! ssh-add -l | grep -q "$FINGERPRINT"; then
  ssh-add "$KEY_PATH"
fi

if [ ! -d ".git" ]; then
  git init
fi

if [ -z "$(git config user.name)" ]; then
  read -p "Enter your codeName: " codeName
  git config user.name "$codeName"
fi
