const axios = require("axios");
jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: { name: "trainee" } })
}));
test("mock axios.get", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  expect(response.data).toEqual({ name: "trainee" });
});
