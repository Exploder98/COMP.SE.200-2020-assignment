/**
 * toString-funktion yksikkötestit
 *
 * @group unit
 */

import toString from "../../src/toString.js";

import isSymbol from "../../src/isSymbol.js";

jest.mock("../../src/isSymbol.js");



describe("unit/toString", () => {
    it("\"\" -> \"\"", () => {
        expect(toString(""))
            .toBe("");
    });

    it("\"test\" -> \"test\"", () => {
        expect(toString("test"))
            .toBe("test");
    });

    isSymbol.mockReturnValueOnce(false);
    it("null -> \"\"", () => {
        expect(toString(null))
            .toBe("");
    });

    isSymbol.mockReturnValueOnce(false);
    it("undefined -> \"\"", () => {
        expect(toString(undefined))
            .toBe("");
    });

    isSymbol.mockReturnValueOnce(false);
    it("-0 -> \"-0\"", () => {
        expect(toString(-0))
            .toBe("-0");
    });

    isSymbol.mockReturnValueOnce(false);
    it("0 -> \"0\"", () => {
        expect(toString(0))
            .toBe("0");
    });

    it("4.2 -> \"4.2\"", () => {
        expect(toString(4.2))
            .toBe("4.2");
    });

    isSymbol.mockReturnValueOnce(false);
    it("Infinity -> \"\"", () => {
        expect(toString(Infinity))
            .toBe("∞");
    });

    isSymbol.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(false);
    it("[1, 2, 3] -> \"1, 2, 3\"", () => {
        expect(toString([1, 2, 3]))
            .toBe("1, 2, 3");
    });

    isSymbol.mockReturnValueOnce(true).mockReturnValueOnce(true);
    it("Symbol(\"test\") -> \"Symbol(\"test\")\"", () => {
        expect(toString(Symbol("test")))
            .toBe("Symbol(test)");
    });

    it("{\"a\": 1} -> \"{\'a\': 1}\"", () => {
        expect(toString({"a": 1}))
            .toBe("{'a': 1}");
    });
});
