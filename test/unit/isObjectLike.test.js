/**
 * isObjectLike-funktion yksikkötestit
 *
 * @group unit
 */

import isObjectLike from "../../src/isObjectLike.js";


describe("unit/isObjectLike", () => {
    it("{} -> true", () => {
        expect(isObjectLike({}))
            .toBe(true);
    });
    
    it("[1, 2, 3] -> true", () => {
        expect(isObjectLike([1, 2, 3]))
            .toBe(true);
    });

    it("\"abc\" -> false", () => {
        expect(isObjectLike("abc"))
            .toBe(false);
    });

    it("new String(\"abc\") -> true", () => {
        expect(isObjectLike(new String("abc")))
            .toBe(true);
    });

    it("Function -> false", () => {
        expect(isObjectLike(Function))
            .toBe(false);
    });

    it("null -> false", () => {
        expect(isObjectLike(null))
            .toBe(false);
    });

    it("undefined -> false", () => {
        expect(isObjectLike(undefined))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isObjectLike(NaN))
            .toBe(false);
    });

    it("true -> false", () => {
        expect(isObjectLike(true))
            .toBe(false);
    });

    it("Symbol(\"object\") -> false", () => {
        expect(isObjectLike(Symbol("object")))
            .toBe(false);
    });

    it("42 -> false", () => {
        expect(isObjectLike(42))
            .toBe(false);
    });

    it("new Number(42) -> true", () => {
        expect(isObjectLike(new Number(42)))
            .toBe(true);
    });
});
