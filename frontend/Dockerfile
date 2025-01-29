FROM node:20 AS build

WORKDIR /app

# Copy package files directly since we're already in the frontend context
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the frontend files
COPY . .

# Build the application
RUN npm run build:prod

# Second stage
FROM nginx:stable-alpine

# Copy the built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]