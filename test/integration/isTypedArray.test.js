/**
 * isTypedArray-funktion integraatiotestit
 *
 * @group integration
 */

import isTypedArray from "../../src/isTypedArray.js";


jest.mock("../../src/.internal/nodeTypes.js",
        () => ({isTypedArray: false}));


describe("integration/isTypedArray", () => {
    it("new Uint8Array -> true (dokumentaatioesimerkki)", () => {
        expect(isTypedArray(new Uint8Array))
            .toBe(true);
    });

    it("[1, 2, 3] -> false", () => {
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
