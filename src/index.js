import express from "express";
import { healthCheckRouter } from "@Routers/healthCheck"

const port = process.env.PORT || 8080;

function buildServer() {
  console.log(`> Building server for ${process.env.NODE_ENV} environment`)
  const server = express();

  server.use("/healthcheck", healthCheckRouter)

  return server
}

if (process.env.NODE_ENV !== "test") {
  buildServer().listen(port, () =>
    console.log(`Server is running on port: ${port}`)
  );
} else { module.exports = buildServer() }
