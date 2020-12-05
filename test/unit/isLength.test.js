/**
 * isLength-funktion yksikkötestit
 *
 * @group unit
 */

import isLength from "../../src/isLength.js";


describe("unit/isLength", () => {
    it("3 -> true", () => {
        expect(isLength(3))
            .toBe(true);
    });

    it("Number.MIN_VALUE -> false", () => {
        expect(isLength(Number.MIN_VALUE))
            .toBe(false);
    });
    
    it("Infinity -> false", () => {
        expect(isLength(Infinity))
            .toBe(false);
    });
    
    it("\"3\" -> false", () => {
        expect(isLength("3"))
            .toBe(false);
    });
    
    it("-42 -> false", () => {
        expect(isLength(-42))
            .toBe(false);
    });
    
    it("undefined -> false", () => {
        expect(isLength(undefined))
            .toBe(false);
    });
    
    it("null -> false", () => {
        expect(isLength(null))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isLength(NaN))
            .toBe(false);
    });
    
    it("1.5 -> false", () => {
        expect(isLength(1.5))
            .toBe(false);
    });
});
