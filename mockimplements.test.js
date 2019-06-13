const mockimplements = require("./mockimplements");
test("Check isEvenNumber return 'so chan'", () => {
  const myMockFn = jest.fn(number => "so chan");
  mockimplements.isEvenNumber = myMockFn;
  expect(myMockFn()).toEqual("so chan");
});
