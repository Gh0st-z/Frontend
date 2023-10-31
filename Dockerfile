FROM node:18.17.1-bullseye AS base
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
CMD ["npx serve -s build"]
