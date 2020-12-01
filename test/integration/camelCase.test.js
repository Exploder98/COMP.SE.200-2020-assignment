/* jshint esversion: 6 */

/**
 * camelCase-funktion integraatiotestit
 *
 * @group integration
 */

import camelCase from "../../src/camelCase.js";


describe("integration/camelCase", () => {
    it("“oHjElMisToN mEsTaUs” -> “ohjelmistonMestaus”", () => {
        expect(camelCase("oHjElMisToN mEsTaUs"))
            .toBe("ohjelmistonMestaus");
    });
    it("“__FEELS_BATMAN???” -> “feelsBatman”", () => {
        expect(camelCase("__FEELS_BATMAN???"))
            .toBe("feelsBatman");
    });
    it("“+-joku-_-randomi” -> “jokuRandomi”", () => {
        expect(camelCase("+-joku-_-randomi"))
            .toBe("jokuRandomi");
    });
    it("“42” -> “42”", () => {
        expect(camelCase("42"))
            .toBe("42");
    });
    it("NaN -> “nan”", () => {
        expect(camelCase(NaN))
            .toBe("nan");
    });
    it("undefined -> “undefined”", () => {
        expect(camelCase(undefined))
            .toBe("undefined");
    });
    it("null -> “null”", () => {
        expect(camelCase(null))
            .toBe("null");
    });
});
