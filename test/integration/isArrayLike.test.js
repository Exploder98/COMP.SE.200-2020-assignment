/**
 * isArrayLike-funktion integraatiotestit
 *
 * @group integration
 */

import isArrayLike from "../../src/isArrayLike.js";


describe("integration/isArrayLike", () => {
    it("{} -> false", () => {
        expect(isArrayLike({}))
            .toBe(false);
    });

    it("[1, 2, 3] -> true", () => {
        expect(isArrayLike([1, 2, 3]))
            .toBe(true);
    });

    it("\"abc\" -> true", () => {
        expect(isArrayLike("abc"))
            .toBe(true);
    });

    it("new String(\"abc\") -> true", () => {
        expect(isArrayLike(new String("abc")))
            .toBe(true);
    });

    it("Function -> false", () => {
        expect(isArrayLike(Function))
            .toBe(false);
    });

    it("Symbol(\"Array\") -> false", () => {
        expect(isArrayLike(Symbol("Array")))
            .toBe(false);
    });

    it("{\"length\": Infinity} -> false", () => {
        expect(isArrayLike({"length": Infinity}))
            .toBe(false);
    });
    
    it("{\"length\": -1} -> false", () => {
        expect(isArrayLike({"length": -1}))
            .toBe(false);
    });
    
    it("{\"length\": 2} -> true", () => {
        expect(isArrayLike({"length": 2}))
            .toBe(true);
    });
    
    it("42 -> false", () => {
        expect(isArrayLike(42))
            .toBe(false);
    });
    
    it("new Number(42)-> false", () => {
        expect(isArrayLike(new Number(42)))
            .toBe(false);
    });
});
