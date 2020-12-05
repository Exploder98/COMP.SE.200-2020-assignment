/**
 * isArguments-funktion integraatiotestit
 *
 * @group integration
 */

import isArguments from "../../src/isArguments.js";


describe("integration/isArguments", () => {
    it("Funktio, joka palauttaa argumentit", () => {
        expect(isArguments(function() {return arguments;}()))
            .toBe(true);
    });

    it("[1, 2, 3] -> false", () => {
        expect(isArguments([1, 2, 3]))
            .toBe(false);
    });

    it("null -> false", () => {
        expect(isArguments(null))
            .toBe(false);
    });

    it("undefined -> false", () => {
        expect(isArguments(undefined))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isArguments(NaN))
            .toBe(false);
    });

    it("{} -> false", () => {
        expect(isArguments({}))
            .toBe(false);
    });
});
