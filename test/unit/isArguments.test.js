/**
 * isArguments-funktion yksikkötestit
 *
 * @group unit
 */

import isArguments from "../../src/isArguments.js";
import isObjectLike from "../../src/isObjectLike.js";


jest.mock("../../src/isObjectLike.js");


describe("unit/isArguments", () => {
    isObjectLike.mockReturnValue(false);

    it("Funktio, joka palauttaa argumentit", () => {
        isObjectLike.mockReturnValueOnce(true);
        expect(isArguments(function() {return arguments;}()))
            .toBe(true);
    });

    it("[1, 2, 3] -> false", () => {
        isObjectLike.mockReturnValueOnce(true);
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
        isObjectLike.mockReturnValueOnce(true);
        expect(isArguments({}))
            .toBe(false);
    });
});
