import { setUpRouterFor } from "@Routers/utils"
import superagent from "superagent"

const healthCheckDomain = router => {
  router.get("/", (_, res) => res.send({ message: "Server is alive" }))
  router.post("/", (req, res) => {
    superagent
      .get(`https://jsonplaceholder.typicode.com/todos/${req.query.id}`)
      .then(({body}) => res.send(body))
      .catch(error => console.log(error))
  })
}

export const healthCheckRouter = setUpRouterFor(healthCheckDomain)