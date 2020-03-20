import { Router } from "express"

export function setUpRouterFor(domain) {
  const router = Router()
  domain(router)
  return router
}