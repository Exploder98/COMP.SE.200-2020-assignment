/**
 * capitalize-funktion integraatiotestit
 *
 * @group integration
 */

import capitalize from "../../src/capitalize.js";


describe("integration/capitalize", () => {
    it("\" moivaan\" -> \" moivaan\"", () => {
        expect(capitalize(" moivaan"))
            .toBe(" moivaan");
    });
    it("\"tämä ei TOIMI\" -> \"Tämä ei toimi\"", () => {
        expect(capitalize("tämä ei TOIMI"))
            .toBe("Tämä ei toimi");
    });
    it("6 -> \"6\"", () => {
        expect(capitalize(6))
            .toBe("6");
    });
    it("NaN -> \"Nan\"", () => {
        expect(capitalize(NaN))
            .toBe("Nan");
    });
    it("undefined -> \"Undefined\"", () => {
        expect(capitalize(undefined))
            .toBe("Undefined");
    });
    it("null -> \"Null\"", () => {
        expect(capitalize(null))
            .toBe("Null");
    });
    it("\"asdf & moi\" -> \"Asdf moi\"", () => {
        expect(capitalize("asdf & moi"))
            .toBe("Asdf & moi");
    });
});
