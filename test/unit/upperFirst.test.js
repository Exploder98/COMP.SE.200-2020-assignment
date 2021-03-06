/**
 * upperFirst-funktion yksikkötestit
 *
 * @group unit
 */

import upperFirst from "../../src/upperFirst.js";


describe("unit/upperFirst", () => {
    it("fred -> Fred (dokumentaatioesimerkki)", () => {
        expect(upperFirst("fred"))
            .toBe("Fred");
    });

    it("FRED -> FRED (dokumentaatioesimerkki)", () => {
        expect(upperFirst("FRED"))
            .toBe("FRED");
    });

    it("42onvastaus -> 42onvastaus", () => {
        expect(upperFirst("42onvastaus"))
            .toBe("42onvastaus");
    });

    it("null -> \"\"", () => {
        expect(upperFirst(null))
            .toBe("");
    });

    it("undefined -> \"\"", () => {
        expect(upperFirst(undefined))
            .toBe("");
    });

    it("NaN -> \"\"", () => {
        expect(upperFirst(NaN))
            .toBe("");
    });

    it("{} -> [object Object]", () => {
        expect(upperFirst({}))
            .toBe("[object Object]");
    });
});
