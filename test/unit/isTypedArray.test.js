/**
 * isTypedArray-funktion yksikkötestit
 *
 * @group unit
 */

import isTypedArray from "../../src/isTypedArray.js";
import isObjectLike from "../../src/isObjectLike.js";


jest.mock("../../src/isObjectLike.js");


describe("unit/isTypedArray", () => {
    isObjectLike.mockReturnValue(false);
    it("new Uint8Array -> true (dokumentaatioesimerkki)", () => {
        isObjectLike.mockReturnValueOnce(true);
        expect(isTypedArray(new Uint8Array))
            .toBe(true);
    });

    it("[1, 2, 3] -> false", () => {
        isObjectLike.mockReturnValueOnce(true);
        expect(isTypedArray([1, 2, 3]))
            .toBe(false);
    });

    it("null -> false", () => {
        expect(isTypedArray(null))
            .toBe(false);
    });

    it("undefined -> false", () => {
        expect(isTypedArray(undefined))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isTypedArray(NaN))
            .toBe(false);
    });
});
