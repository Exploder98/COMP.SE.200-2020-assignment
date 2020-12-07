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

    it("Infinity -> 1.7976931348623157e+308", () => {
        expect(toInteger(Infinity))
            .toBe(1.7976931348623157e+308);
    });

    it("Number.MIN_VALUE -> 0", () => {
        expect(toInteger(Number.MIN_VALUE))
            .toBe(0);
    });

    it("null -> 0", () => {
        expect(toInteger(null))
            .toBe(0);
    });

    it("undefined -> 0", () => {
        expect(toInteger(undefined))
            .toBe(0);
    });

    it("NaN -> 0", () => {
        expect(toInteger(NaN))
            .toBe(0);
    });

    it("true -> 1", () => {
        expect(toInteger(true))
            .toBe(1);
    });

    it("false -> 0", () => {
        expect(toInteger(false))
            .toBe(0);
    });

    it("\"a\" -> 0", () => {
        expect(toInteger("a"))
            .toBe(0);
    });
});
