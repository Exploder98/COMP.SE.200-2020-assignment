/**
 * isarrayLikeObject-funktion integraatiotestit
 *
 * @group integration
 */

import isArrayLikeObject from "../../src/isArrayLikeObject.js";


describe("integration/isArrayLikeObject", () => {
    it("{} -> false", () => {
        expect(isArrayLikeObject({}))
            .toBe(false);
    });

    it("[1, 2, 3] -> true", () => {
        expect(isArrayLikeObject([1, 2, 3]))
            .toBe(true);
    });

    it("\"abc\" -> false", () => {
        expect(isArrayLikeObject("abc"))
            .toBe(false);
    });

    it("new String(\"abc\") -> true", () => {
        /*jshint -W053 */
        expect(isArrayLikeObject(new String("abc")))
            .toBe(true);
    });

    it("Function -> false", () => {
        expect(isArrayLikeObject(Function))
            .toBe(false);
    });

    it("{\"length\": Infinity} -> false", () => {
        expect(isArrayLikeObject({"length": Infinity}))
            .toBe(false);
    });

    it("{\"length\": -1} -> false", () => {
        expect(isArrayLikeObject({"length": -1}))
            .toBe(false);
    });

    it("{\"length\": 2} -> true", () => {
        expect(isArrayLikeObject({"length": 2}))
            .toBe(true);
    });

    it("42 -> false", () => {
        expect(isArrayLikeObject(42))
            .toBe(false);
    });

    it("new Number(42) -> false", () => {
        /*jshint -W053 */
        expect(isArrayLikeObject(new Number(42)))
            .toBe(false);
    });

    it("Symbol(\"Array\") -> false", () => {
        expect(isArrayLikeObject(Symbol("Array")))
            .toBe(false);
    });
});
