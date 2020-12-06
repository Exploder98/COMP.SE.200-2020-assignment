/**
 * toNumber-funktion yksikkötestit
 *
 * @group unit
 */

import toNumber from "../../src/toNumber.js";

import isObject from "../../src/isObject.js";
import isSymbol from "../../src/isSymbol.js";

jest.mock("../../src/isObject.js");
jest.mock("../../src/isSymbol.js");



describe("unit/toNumber", () => {
    it("42 -> 42", () => {
        expect(toNumber(42))
            .toBe(42);
    });

    isSymbol.mockReturnValueOnce(false);
    isObject.mockReturnValueOnce(false);
    it("new Number(42) -> 42", () => {
        expect(toNumber(new Number(42)))
            .toBe(42);
    });

    it("NaN-> NaN", () => {
        expect(toNumber(NaN))
            .toBe(NaN);
    });

    it("Infinity-> Infinity", () => {
        expect(toNumber(Infinity))
            .toBe(Infinity);
    });

    isSymbol.mockReturnValueOnce(false);
    isObject.mockReturnValueOnce(false);
    it("\"3.2\"-> 3.2", () => {
        expect(toNumber("3.2"))
            .toBe(3.2);
    });
    isSymbol.mockReturnValueOnce(false);
    isObject.mockReturnValueOnce(false);
    it("\"           3.2           \"-> 3.2", () => {
        expect(toNumber("           3.2           "))
            .toBe(3.2);
    });

    it("3.2-> 3.2", () => {
        expect(toNumber(3.2))
            .toBe(3.2);
    });

    it("\"two\"-> 2", () => {
        expect(toNumber("two"))
            .toBe(2);
    });

    it("\"0x2A\"-> 42", () => {
        expect(toNumber("0X2A"))
            .toBe(42);
    });

    it("\"0b101010\"-> 42", () => {
        expect(toNumber("0b101010"))
            .toBe(42);
    });

    it("\"0o52\"-> 42", () => {
        expect(toNumber("0o52"))
            .toBe(42);
    });

    isSymbol.mockReturnValueOnce(true);
    it("Symbol(\"a\")-> NaN", () => {
        expect(toNumber(Symbol("a")))
            .toBe(NaN);
    });

    it("\"a\"-> NaN", () => {
        expect(toNumber("a"))
            .toBe(NaN);
    });

    it("undefined-> NaN", () => {
        expect(toNumber(undefined))
            .toBe(NaN);
    });

    it("null-> NaN", () => {
        expect(toNumber(null))
            .toBe(NaN);
    });

    it("true-> 1", () => {
        expect(toNumber(true))
            .toBe(1);
    });

    it("false-> 0", () => {
        expect(toNumber(false))
            .toBe(0);
    });
    isSymbol.mockReturnValueOnce(false);
    isObject.mockReturnValueOnce(true);
    it("{}-> NaN", () => {
        expect(toNumber({}))
            .toBe(NaN);
    });
});
