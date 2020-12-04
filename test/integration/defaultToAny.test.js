/**
 * defaultToAny-funktion integraatiotestit
 *
 * @group integration
 */

import defaultToAny from "../../src/defaultToAny.js";


describe("integration/defaultToAny", () => {
    it("[1, 10, 20] -> 1 (dokumentaatioesimerkki)", () => {
        expect(defaultToAny(1, 10, 20))
            .toBe(1);
    });

    it("[undefined, 10, 20] -> 10 (dokumentaatioesimerkki)", () => {
        expect(defaultToAny(undefined, 10, 20))
            .toBe(10);
    });

    it("[undefined, null, 20] -> 20 (dokumentaatioesimerkki)", () => {
        expect(defaultToAny(undefined, null, 20))
            .toBe(20);
    });

    it("[undefined, null, NaN] -> NaN (dokumentaatioesimerkki)", () => {
        expect(defaultToAny(undefined, null, NaN))
            .toBe(NaN);
    });

    it("[undefined, null, 20, NaN] -> 20", () => {
        expect(defaultToAny(undefined, null, 20, NaN))
            .toBe(20);
    });
});
