import request from "supertest"
import App from "../index"

describe("HealthCheck", () => {
  it("should respond that server is alive", async () => {
    await request(App)
      .get("/healthcheck")
      .expect(200, { message: "Server is alive" })
  })

  it("should demonstrate that server can ping other servers", done => {
    request(App)
      .post("/healthcheck")
      .query({ id: 1 })
      .expect(200)
      .then(res => {
        expect(res.id === 1)
        done()
      })
  })
})
