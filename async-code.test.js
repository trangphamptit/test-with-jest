//promise
test("promise1 have result to be 'animal'", () => {
  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("animal");
    }, 300);
  });
  promise1.then(result => expect(result).toBe("animal"));
});

//axios
const axios = require("axios");
jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: { completed: false } })
}));
test("mock axios.get", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  expect(response.data).toEqual({ completed: false });
});
