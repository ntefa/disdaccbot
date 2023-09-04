# Use the official Node.js runtime as the base image
FROM node:19

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application files to the working directory
COPY . .

# Build the TypeScript code
RUN yarn run build

# Run the script to deploy commands
RUN node dist/deploy-commands.js

# Command to start your application
CMD ["node", "dist/index.js"]
