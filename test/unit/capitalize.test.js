/**
 * capitalize-funktion yksikkötestit
 *
 * @group unit
 */

import capitalize from "../../src/capitalize.js";
import upperFirst from "../../src/upperFirst.js";
import toString from "../../src/toString.js";

jest.mock("../../src/upperFirst.js");
jest.mock("../../src/toString.js");

describe("unit/capitalize", () => {
    toString.mockImplementation(value => String(value));

    it("\" moivaan\" -> \"Moivaan\"", () => {
        upperFirst.mockReturnValueOnce("Moivaan");
        expect(capitalize(" moivaan"))
            .toBe("Moivaan");
    });
    it("\"tämä ei TOIMI\" -> \"Tämä ei toimi\"", () => {
        upperFirst.mockReturnValueOnce("Tämä ei toimi");
        expect(capitalize("tämä ei TOIMI"))
            .toBe("Tämä ei toimi");
    });
    it("6 -> \"6\"", () => {
        upperFirst.mockReturnValueOnce("6");
        expect(capitalize(6))
            .toBe("6");
    });
    it("NaN -> \"Nan\"", () => {
        upperFirst.mockReturnValueOnce("Nan");
        expect(capitalize(NaN))
            .toBe("Nan");
    });
    it("undefined -> \"\"", () => {
        upperFirst.mockReturnValueOnce("");
        expect(capitalize(undefined))
            .toBe("");
    });
    it("null -> \"Null\"", () => {
        upperFirst.mockReturnValueOnce("Null");
        expect(capitalize(null))
            .toBe("Null");
    });
    it("\"asdf & moi\" -> \"Asdf moi\"", () => {
        upperFirst.mockReturnValueOnce("Asdf moi");
        expect(capitalize("asdf & moi"))
            .toBe("Asdf moi");
    });
});
