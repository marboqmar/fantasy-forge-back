import { api } from "../functions/api.js";
import request from "supertest";
import { describe, it, expect } from "vitest";
import { ItemDetailsModel } from "../src/models/index.js";

const getItems = async () => {
  return await request(api).get("/").send();
};

describe("ShopItems", () => {
  it("Returns 200 when querying items list", async () => {
    const response = await getItems();

    expect(response.status).toBe(200);
  });

  it("Contains Access-Control header", async () => {
    const response = await getItems();
    expect(response.header).toHaveProperty("access-control-allow-origin");
  });

  it("Returns the fixed list of items", async () => {
    const responseBody = (await getItems()).body as ItemDetailsModel[];
    expect(Object.keys(responseBody[0])).toContain("key");
  });
});
