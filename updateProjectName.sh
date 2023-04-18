#!/bin/bash

OLD_APP_NAME="web-mobile-template"

# Prompt the user to enter the new app name
read -p "Enter the new app name: " NEW_APP_NAME

# Update capacitor.config.ts
sed -i "s/${OLD_APP_NAME}/${NEW_APP_NAME}/g" capacitor.config.ts

# Update ionic.config.json
sed -i "s/${OLD_APP_NAME}/${NEW_APP_NAME}/g" ionic.config.json

# Update package-lock.json
sed -i "s/${OLD_APP_NAME}/${NEW_APP_NAME}/g" package-lock.json

# Update package.json
sed -i "s/${OLD_APP_NAME}/${NEW_APP_NAME}/g" package.json

# Print completion message
echo "Text changes updated successfully!"
