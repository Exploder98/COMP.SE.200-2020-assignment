/**
 * toFinite-funktion yksikkötestit
 *
 * @group unit
 */

import toFinite from "../../src/toFinite.js";

import toNumber from "../../src/toNumber.js";

jest.mock("../../src/toNumber.js");

describe("unit/toFinite", () => {
    toNumber.mockReturnValueOnce(42);
    it("42 -> 42", () => {
        expect(toFinite(42))
            .toBe(42);
    });
    toNumber.mockReturnValueOnce(1.7976931348623157e+308);
    it("Infinity -> 1.7976931348623157e+308 (rajapintadokumentaation esimerkki)", () => {
        expect(toFinite(Infinity))
            .toBe(1.7976931348623157e+308);
    });
    toNumber.mockReturnValueOnce(5e-324);
    it("Number.MIN_VALUE -> 5e-324", () => {
        expect(toFinite(Number.MIN_VALUE))
            .toBe(5e-324);
    });
    toNumber.mockReturnValueOnce(3.2);
    it("\"3.2\" -> 3.2", () => {
        expect(toFinite("3.2"))
            .toBe(3.2);
    });

    toNumber.mockReturnValueOnce(0);
    it("\"a\" -> 0", () => {
        expect(toFinite("a"))
            .toBe(0);
    });

    it("NaN -> 0", () => {
        expect(toFinite(NaN))
            .toBe(0);
    });

    it("undefined -> 0", () => {
        expect(toFinite(undefined))
            .toBe(0);
    });

    it("null -> 0", () => {
        expect(toFinite(null))
            .toBe(0);
    });
    toNumber.mockReturnValueOnce(1);
    it("true -> 1", () => {
        expect(toFinite(true))
            .toBe(1);
    });

    it("false -> 0", () => {
        expect(toFinite(false))
            .toBe(0);
    });
});
