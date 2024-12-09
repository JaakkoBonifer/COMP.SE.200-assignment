import add from "../src/add.js";

describe("Add tests", () => {
    test("Adds 0 to 1 to get 1", () => {
        expect(add(0, 1)).toBe(1);
    });
});
