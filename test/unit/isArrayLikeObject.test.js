/**
 * isarrayLikeObject-funktion yksikkötestit
 *
 * @group unit
 */

import isArrayLikeObject from "../../src/isArrayLikeObject.js";
import isArrayLike from "../../src/isArrayLike.js";
import isObjectLike from "../../src/isObjectLike.js";


jest.mock("../../src/isArrayLike.js");
jest.mock("../../src/isObjectLike.js");


describe("unit/isArrayLikeObject", () => {
    it("{} -> false", () => {
        isObjectLike.mockReturnValueOnce(true);
        isArrayLike.mockReturnValueOnce(false);
        expect(isArrayLikeObject({}))
            .toBe(false);
    });

    it("[1, 2, 3] -> true", () => {
        isObjectLike.mockReturnValueOnce(true);
        isArrayLike.mockReturnValueOnce(true);
        expect(isArrayLikeObject([1, 2, 3]))
            .toBe(true);
    });

    it("\"abc\" -> false", () => {
        isObjectLike.mockReturnValueOnce(false);
        expect(isArrayLikeObject("abc"))
            .toBe(false);
    });

    it("new String(\"abc\") -> true", () => {
        /*jshint -W053 */
        isObjectLike.mockReturnValueOnce(true);
        isArrayLike.mockReturnValueOnce(true);
        expect(isArrayLikeObject(new String("abc")))
            .toBe(true);
    });

    it("Function -> false", () => {
        isObjectLike.mockReturnValueOnce(false);
        expect(isArrayLikeObject(Function))
            .toBe(false);
    });

    it("{\"length\": Infinity} -> false", () => {
        isObjectLike.mockReturnValueOnce(true);
        isArrayLike.mockReturnValueOnce(false);
        expect(isArrayLikeObject({"length": Infinity}))
            .toBe(false);
    });

    it("{\"length\": -1} -> false", () => {
        isObjectLike.mockReturnValueOnce(true);
        isArrayLike.mockReturnValueOnce(false);
        expect(isArrayLikeObject({"length": -1}))
            .toBe(false);
    });

    it("{\"length\": 2} -> true", () => {
        isObjectLike.mockReturnValueOnce(true);
        isArrayLike.mockReturnValueOnce(true);
        expect(isArrayLikeObject({"length": 2}))
            .toBe(true);
    });

    it("42 -> false", () => {
        isObjectLike.mockReturnValueOnce(false);
        expect(isArrayLikeObject(42))
            .toBe(false);
    });

    it("new Number(42) -> false", () => {
        isObjectLike.mockReturnValueOnce(true);
        isArrayLike.mockReturnValueOnce(false);
        /*jshint -W053 */
        expect(isArrayLikeObject(new Number(42)))
            .toBe(false);
    });

    it("Symbol(\"Array\") -> false", () => {
        isObjectLike.mockReturnValueOnce(false);
        expect(isArrayLikeObject(Symbol("Array")))
            .toBe(false);
    });
});
