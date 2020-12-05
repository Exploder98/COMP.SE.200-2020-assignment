/**
 * isSymbol-funktion yksikkötestit
 *
 * @group unit
 */

import isSymbol from "../../src/isSymbol.js";


describe("unit/isSymbol", () => {
    it("Symbol(\"42\") -> true", () => {
        expect(isSymbol(Symbol(42)))
            .toBe(true);
    });

    it("Symbol({\"a\": 42}) -> true", () => {
        expect(isSymbol(Symbol({"a": 42})))
            .toBe(true);
    });

    it("{\"a\": 42} -> false", () => {
        expect(isSymbol({"a": 42}))
            .toBe(false);
    });

    it("null -> false", () => {
        expect(isSymbol(null))
            .toBe(false);
    });

    it("undefined -> false", () => {
        expect(isSymbol(undefined))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isSymbol(NaN))
            .toBe(false);
    });
});
