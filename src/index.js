import express from "express";
import { healthCheckRouter } from "./router/healthCheck"

const app = express();
const port = process.env.PORT || 8080;

app.use("/healthcheck", healthCheckRouter)


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); 