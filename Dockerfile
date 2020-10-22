FROM node:14-alpine

WORKDIR /app
COPY . .

RUN HUSKY_SKIP_INSTALL=true npm i --no-progress
RUN npm run build

# Use PM2 to manage node process
RUN npm install -g pm2

EXPOSE 3000
ENTRYPOINT ["pm2-runtime", "scripts/serve.js"]