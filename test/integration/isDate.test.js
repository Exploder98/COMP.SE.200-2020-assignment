/**
 * isDate-funktion integraatiotestit
 *
 * @group integration
 */

import isDate from "../../src/isDate.js";


describe("integration/isDate", () => {
    it("Date() -> true", () => {
        expect(isDate(Date()))
            .toBe(true);
    });

    it("new Date -> true", () => {
        expect(isDate(new Date()))
            .toBe(true);
    });

    it("\"Mon April 23 2012\" -> false", () => {
        expect(isDate("Mon April 23 2012"))
            .toBe(false);
    });

    it("true -> false", () => {
        expect(isDate(true))
            .toBe(false);
    });

    it("undefined -> false", () => {
        expect(isDate(undefined))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isDate(NaN))
            .toBe(false);
    });

    it("null -> false", () => {
        expect(isDate(null))
            .toBe(false);
    });
});