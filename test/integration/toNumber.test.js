/**
 * toNumber-funktion integraatiotestit
 *
 * @group integration
 */

import toNumber from "../../src/toNumber.js";


describe("integration/toNumber", () => {
    it("42 -> 42", () => {
        expect(toNumber(42))
            .toBe(42);
    });

    it("Symbol(\"a\") -> NaN", () => {
        expect(toNumber(Symbol("a")))
            .toBe(NaN);
    });

    it("{} -> NaN", () => {
        expect(toNumber({}))
            .toBe(NaN);
    });

});
