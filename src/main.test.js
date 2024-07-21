import main from "./main";

describe('testing the main function', () => {
    test('should return the correct name ', () => {
        expect(main("Edson")).toBe("Edson")
    });
})