/* jshint esversion: 6 */

/**
 * compact-funktion yksikkötestit
 *
 * @group unit
 */

import compact from "../../src/compact.js";


describe("unit/compact", () => {
    it("[0, 1, false, 2, \"\", 3] -> [1, 2, 3] (dokumentaatioesimerkki)", () => {
        expect(compact([0, 1, false, 2, "", 3]))
            .toStrictEqual([1, 2, 3]);
    });

    it("[undefined, 0, null, 1, NaN] -> [1]", () => {
        expect(compact([undefined, 0, null, 1, NaN]))
            .toStrictEqual([1]);
    });

    it("[false, null, 0, \"\", undefined, NaN] -> []", () => {
        expect(compact([false, null, 0, "", undefined, NaN]))
            .toStrictEqual([]);
    });
});
