const mocknames = require("./mocknames");
test("Check isEvenNumber return 'so chan'", () => {
  const myMockFn = jest.fn(number => "so chan").mockName("kiemtrasochan");
  mocknames.isEvenNumber = myMockFn;
  expect(myMockFn()).toEqual("so chan");
});
