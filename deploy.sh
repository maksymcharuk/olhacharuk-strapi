#!/bin/bash

# Set variables
REMOTE_USER="root"
REMOTE_HOST="159.203.96.116"
REMOTE_PATH="/var/www/olhacharuk.com/strapi/build"  # Path on VPS where build files go

echo "Starting local build with production environment..."

# Local build with production environment
npm run build -- --env=production

# Check if build succeeded
if [ $? -ne 0 ]; then
  echo "Build failed. Exiting..."
  exit 1
fi

echo "Local build completed successfully."

# Transfer build files to VPS
echo "Transferring build files to VPS..."
scp -r ./build/* $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH

# SSH into VPS and deploy
echo "Connecting to VPS to finalize deployment..."

ssh $REMOTE_USER@$REMOTE_HOST << EOF
  echo "Pulling latest changes from master..."
  cd /var/www/olhacharuk.com/strapi
  git pull origin master

  echo "Restarting application with PM2 from root directory..."
  cd ~
  pm2 restart ecosystem.config.js

  echo "Deployment completed."
EOF

echo "Deployment script finished successfully."