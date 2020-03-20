import express from "express";
import { healthCheckRouter } from "./router/healthCheck"

const port = process.env.PORT || 8080;

function buildServer() {
  const server = express();

  server.use("/healthcheck", healthCheckRouter)

  return server
}

if (process.env.NODE_ENV !== "test") {
  buildServer().listen(port, () =>
    console.log(`Server is running on port: ${port}`)
  );
} else { module.exports = buildServer() }
