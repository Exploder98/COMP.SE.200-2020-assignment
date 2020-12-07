/**
 * toInteger-funktion yksikkötestit
 *
 * @group unit
 */

import toInteger from "../../src/toInteger.js";

import toNumber from "../../src/toFinite.js";
import toFinite from "../../src/toFinite.js";

jest.mock("../../src/toFinite.js");

describe("unit/toInteger", () => {
    toFinite.mockReturnValueOnce(42);
    it("42 -> 42", () => {
        expect(toInteger(42))
            .toBe(42);
    });

    toFinite.mockReturnValueOnce(-42.3);
    it("-42.3 -> -42", () => {
        expect(toInteger(-42.3))
            .toBe(-42);
    });

    toFinite.mockReturnValueOnce(42.01230123);
    it("42.01230123 -> 42", () => {
        expect(toInteger(42.01230123))
            .toBe(42);
    });

    toFinite.mockReturnValueOnce(49.9);
    it("49.9 -> 49", () => {
        expect(toInteger(49.9))
            .toBe(49);
    });

    toFinite.mockReturnValueOnce(1.7976931348623157e+308);
    it("Infinity -> 1.7976931348623157e+308", () => {
        expect(toInteger(Infinity))
            .toBe(1.7976931348623157e+308);
    });

    toFinite.mockReturnValueOnce(5e-324);
    it("Number.MIN_VALUE -> 0", () => {
        expect(toInteger(Number.MIN_VALUE))
            .toBe(0);
    });

    toFinite.mockReturnValueOnce(0);
    it("null -> 0", () => {
        expect(toInteger(null))
            .toBe(0);
    });

    toFinite.mockReturnValueOnce(0);
    it("undefined -> 0", () => {
        expect(toInteger(undefined))
            .toBe(0);
    });

    toFinite.mockReturnValueOnce(0);
    it("NaN -> 0", () => {
        expect(toInteger(NaN))
            .toBe(0);
    });

    toFinite.mockReturnValueOnce(1);
    it("true -> 1", () => {
        expect(toInteger(true))
            .toBe(1);
    });

    toFinite.mockReturnValueOnce(0);
    it("false -> 0", () => {
        expect(toInteger(false))
            .toBe(0);
    });

    toFinite.mockReturnValueOnce(0);
    it("\"a\" -> 0", () => {
        expect(toInteger("a"))
            .toBe(0);
    });
});
