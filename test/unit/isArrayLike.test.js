/**
 * isArrayLike-funktion yksikkötestit
 *
 * @group unit
 */

import isArrayLike from "../../src/isArrayLike.js";
import isLength from "../../src/isLength.js";


jest.mock("../../src/isLength.js");


describe("unit/isArrayLike", () => {
    isLength.mockReturnValueOnce(false);
    it("{} -> false", () => {
        expect(isArrayLike({}))
            .toBe(false);
    });

    isLength.mockReturnValueOnce(true);
    it("[1, 2, 3] -> true", () => {
        expect(isArrayLike([1, 2, 3]))
            .toBe(true);
    });

    isLength.mockReturnValueOnce(true);
    it("\"abc\" -> true", () => {
        expect(isArrayLike("abc"))
            .toBe(true);
    });

    isLength.mockReturnValueOnce(true);
    it("new String(\"abc\") -> true", () => {
        expect(isArrayLike(new String("abc")))
            .toBe(true);
    });

    it("Function -> false", () => {
        expect(isArrayLike(Function))
            .toBe(false);
    });

    isLength.mockReturnValueOnce(false);
    it("Symbol(\"Array\") -> false", () => {
        expect(isArrayLike(Symbol("Array")))
            .toBe(false);
    });

    isLength.mockReturnValueOnce(false);
    it("{\"length\": Infinity} -> false", () => {
        expect(isArrayLike({"length": Infinity}))
            .toBe(false);
    });

    isLength.mockReturnValueOnce(false);
    it("{\"length\": -1} -> false", () => {
        expect(isArrayLike({"length": -1}))
            .toBe(false);
    });

    isLength.mockReturnValueOnce(true);
    it("{\"length\": 2} -> true", () => {
        expect(isArrayLike({"length": 2}))
            .toBe(true);
    });

    isLength.mockReturnValueOnce(false);
    it("42 -> false", () => {
        expect(isArrayLike(42))
            .toBe(false);
    });
    
    isLength.mockReturnValueOnce(false);
    it("new Number(42)-> false", () => {
        expect(isArrayLike(new Number(42)))
            .toBe(false);
    });
});
