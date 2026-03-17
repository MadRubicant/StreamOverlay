#!/bin/sh
cd ~;
if [ ! -d "stream-overlay" ]; then
    echo "Cloning repo on remote host"
    git clone "https://github.com/MadRubicant/StreamOverlay.git" stream-overlay
fi

cd stream-overlay;

echo "Pulling latest version of main"
git pull;
pnpm install --prod;

echo "Building server"
pnpm run build

echo "Starting server"
pnpm run start

echo "Server started, closing connection"