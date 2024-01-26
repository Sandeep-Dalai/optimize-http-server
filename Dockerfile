# Use a lightweight Node.js image compatible with ARM and x86
FROM node:14-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8080

# Define environment variables
ENV NODE_ENV=production

# Command to run the application
CMD ["node", "app.js"]
