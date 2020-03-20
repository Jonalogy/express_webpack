import { setUpRouterFor } from "./utils"

const healthCheckDomain = router =>
  router.get("/", (_, res) => res.send("Server is alive"))

export const healthCheckRouter = setUpRouterFor(healthCheckDomain)