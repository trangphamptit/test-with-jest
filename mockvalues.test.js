const mockvalues = require("./mockvalues");
test("Add (2 + 2) * 5 to equal 20", () => {
  let mockAdd = jest.fn();
  mockAdd.mockReturnValueOnce(2).mockReturnValueOnce(3);
  mockvalues.add = mockAdd;
  //   for (let i = 0; i < 2; i++) {
  //     expect(mockvalues.caculate(i, 2, 5)).toBe(10);
  //   }
  //     expect(mockAdd.mock.calls.length).toBe(2);
  console.log(mockAdd(), mockAdd());
});
