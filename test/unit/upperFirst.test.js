/* jshint esversion: 6 */

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

    it("null -> \"Null\"", () => {
        expect(upperFirst(null))
            .toBe("Null");
    });

    it("undefined -> \"Undefined\"", () => {
        expect(upperFirst(undefined))
            .toBe("Undefined");
    });

    it("NaN -> \"NaN\"", () => {
        expect(upperFirst(NaN))
            .toBe("NaN");
    });

    it("{} -> [object Object]", () => {
        expect(upperFirst({}))
            .toBe("[object Object]");
    });
});
