import "isomorphic-unfetch";
import dotenv from "dotenv";
const nock = require("nock");

dotenv.config({ path: ".env.test" });

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});
