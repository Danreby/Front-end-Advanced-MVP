FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve \
  && apk add --no-cache curl

COPY --from=builder /app/dist ./dist

EXPOSE 5173

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5173 || exit 1

CMD ["serve", "-s", "dist", "-l", "5173"]
