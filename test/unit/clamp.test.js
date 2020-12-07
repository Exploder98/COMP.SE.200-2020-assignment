/**
 * clamp-funktion yksikkötestit
 *
 * @group unit
 */

import clamp from "../../src/clamp.js";


describe("unit/clamp", () => {
    it("-10 -> [-5, 5] -> -5 (dokumentaatioesimerkki)", () => {
        expect(clamp(-10, -5, 5))
            .toBe(-5);
    });

    it("10 -> [-5, 5] -> 5 (dokumentaatioesimerkki)", () => {
        expect(clamp(10, -5, 5))
            .toBe(5);
    });

    it("10 -> [11, 9] -> 10", () => {
        expect(clamp(10, 11, 9))
            .toBe(10);
    });

    it("42 -> [2, 4] -> 4", () => {
        expect(clamp(42, 2, 4))
            .toBe(4);
    });

    it("NaN -> [-5, 5] -> NaN", () => {
        expect(clamp(NaN, -5, 5))
            .toBe(NaN);
    });

    it("0 -> [-5, 5] -> 0", () => {
        expect(clamp(0, -5, 5))
            .toBe(0);
    });

    it("0 -> [NaN, 5] -> NaN", () => {
        expect(clamp(0, NaN, 5))
            .toBe(0);
    });

    it("0 -> [undefined, 5] -> 0", () => {
        expect(clamp(0, undefined, 5))
            .toBe(0);
    });

    it("0 -> [null, 5] -> 0", () => {
        expect(clamp(0, null, 5))
            .toBe(0);
    });

    it("0 -> [true, 5] -> NaN", () => {
        expect(clamp(0, true, 5))
            .toBe(1);
    });

    it("0 -> [false, 5] -> 0", () => {
        expect(clamp(0, false, 5))
            .toBe(0);
    });
});
