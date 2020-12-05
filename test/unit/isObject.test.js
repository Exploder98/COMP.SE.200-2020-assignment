/**
 * isObject-funktion yksikkötestit
 *
 * @group unit
 */

import isObject from "../../src/isObject.js";


describe("unit/isObject", () => {
    it("{} -> true (dokumentaatioesimerkki)", () => {
        expect(isObject({}))
            .toBe(true);
    });

    it("[1, 2, 3] -> true (dokumentaatioesimerkki)", () => {
        expect(isObject([1, 2, 3]))
            .toBe(true);
    });

    it("new Number(42) -> true (dokumentaatioesimerkki)", () => {
        /*jshint -W053 */
        expect(isObject(new Number(42)))
            .toBe(true);
    });

    it("Symbol(\"a\") -> false", () => {
        expect(isObject(Symbol("a")))
            .toBe(false);
    });

    it("Function -> true", () => {
        expect(isObject(Function))
            .toBe(true);
    });

    it("1 -> false", () => {
        expect(isObject(1))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isObject(NaN))
            .toBe(false);
    });

    it("undefined -> false", () => {
        expect(isObject(undefined))
            .toBe(false);
    });

    it("true -> false", () => {
        expect(isObject(true))
            .toBe(false);
    });

    it("\"a\" -> false", () => {
        expect(isObject("a"))
            .toBe(false);
    });

    it("new String(\"a\") -> true", () => {
        /*jshint -W053 */
        expect(isObject(new String("a")))
            .toBe(true);
    });

    it("null -> false (dokumentaatioesimerkki)", () => {
        expect(isObject(null))
            .toBe(false);
    });

    it("/\d+/g -> true", () => {
        expect(isObject(/\d+/g))
            .toBe(true);
    });
});
