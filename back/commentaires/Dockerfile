FROM node:10-alpine
# Use an official Node runtime as a parent image
FROM node:10-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json files and other dependency-related files
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000


# Run the app when the container launches
CMD ["node", "app.js"]