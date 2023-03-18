# Base image
FROM node:16-alpine3.11

# Set the working directory
WORKDIR /app

# Copy the source code to the working directory
COPY . .

# Install dependencies
RUN npm install

# Build the app for production
RUN npm run build

# Expose the port to the outside world
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
