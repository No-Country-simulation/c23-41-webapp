FROM node:20 AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI y Typescript globalmente
RUN npm install -g @angular/cli typescript

# Copy the entire project
COPY . .

# Build the Angular SSR project
RUN npm run build:ssr

# Second stage para producción
FROM node:20-alpine

WORKDIR /app

# Copy the built Angular SSR project
COPY --from=build /app/dist /app/dist

# Expose port 4000 for the SSR server
EXPOSE 4000

# Run the Node.js server
CMD ["node", "dist/server/main.js"]
