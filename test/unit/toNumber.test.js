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
    isSymbol.mockReturnValue(false);
    isObject.mockReturnValue(false);

    it("42 -> 42", () => {
        expect(toNumber(42))
            .toBe(42);
    });

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

    it("\"3.2\"-> 3.2", () => {
        expect(toNumber("3.2"))
            .toBe(3.2);
    });

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

    it("Symbol(\"a\")-> NaN", () => {
        isSymbol.mockReturnValueOnce(true);
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

    it("null-> 0", () => {
        expect(toNumber(null))
            .toBe(0);
    });

    it("true-> 1", () => {
        expect(toNumber(true))
            .toBe(1);
    });

    it("false-> 0", () => {
        expect(toNumber(false))
            .toBe(0);
    });

    it("{}-> NaN", () => {
        isObject.mockReturnValueOnce(true);
        expect(toNumber({}))
            .toBe(NaN);
    });
});
