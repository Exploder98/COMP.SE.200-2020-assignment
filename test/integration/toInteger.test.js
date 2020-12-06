/**
 * toInteger-funktion integraatiotestit
 *
 * @group integration
 */

import toInteger from "../../src/toInteger.js";


describe("integration/toInteger", () => {
    it("42 -> 42", () => {
        expect(toInteger(42))
            .toBe(42);
    });

    it("-42.3 -> -42", () => {
        expect(toInteger(-42.3))
            .toBe(-42);
    });

    it("42.01230123 -> 42", () => {
        expect(toInteger(42.01230123))
            .toBe(42);
    });

    it("49.9 -> 49", () => {
        expect(toInteger(49.9))
            .toBe(49);
    });

    it("\"two\" -> 2", () => {
        expect(toInteger("two"))
            .toBe(2);
    });

    it("Infinity -> 1.7976931348623157e+308", () => {
        expect(toInteger(Infinity))
            .toBe(1.7976931348623157e+308);
    });

    it("Number.MIN_VALUE -> 0", () => {
        expect(toInteger(Number.MIN_VALUE))
            .toBe(0);
    });

    it("null -> NaN", () => {
        expect(toInteger(null))
            .toBe(NaN);
    });

    it("undefined -> NaN", () => {
        expect(toInteger(undefined))
            .toBe(NaN);
    });

    it("NaN -> NaN", () => {
        expect(toInteger(NaN))
            .toBe(NaN);
    });

    it("true -> 1", () => {
        expect(toInteger(true))
            .toBe(1);
    });

    it("false -> 0", () => {
        expect(toInteger(false))
            .toBe(0);
    });

    it("\"a\" -> NaN", () => {
        expect(toInteger("a"))
            .toBe(NaN);
    });
});
