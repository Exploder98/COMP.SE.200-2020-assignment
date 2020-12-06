/**
 * slice-funktion yksikkötestit
 *
 * @group unit
 */

import slice from "../../src/slice.js";


describe("unit/slice", () => {
    it("[1, 2, 3, 4] -> [1, 2, 3, 4]", () => {
        expect(slice([1, 2, 3, 4]))
            .toStrictEqual([1, 2, 3, 4]);
    });

    it("[1, 2, 3, 4], 2 -> [3, 4]", () => {
        expect(slice([1, 2, 3, 4], 2))
            .toStrictEqual([3, 4]);
    });

    it("[1, 2, 3, 4], undefined, 2 -> [1, 2]", () => {
        expect(slice([1, 2, 3, 4], undefined, 2))
            .toStrictEqual([1, 2]);
    });

    it("[1, 2, 3, 4], 2.5 -> [4]", () => {
        expect(slice([1, 2, 3, 4], 2.5))
            .toStrictEqual([4]);
    });

    it("[1, 2, 3, 4], -1 -> [4]", () => {
        expect(slice([1, 2, 3, 4], -1))
            .toStrictEqual([4]);
    });

    it("[1, 2, 3, 4], -1, -3 -> [4, 3]", () => {
        expect(slice([1, 2, 3, 4], -1, -3))
            .toStrictEqual([4, 3]);
    });

    it("[1, 2, 3, 4], NaN -> []", () => {
        expect(slice([1, 2, 3, 4], NaN))
            .toStrictEqual([]);
    });

    it("[1, 2, 3, 4], undefined, NaN -> [1, 2, 3, 4]", () => {
        expect(slice([1, 2, 3, 4], undefined, NaN))
            .toStrictEqual([1, 2, 3, 4]);
    });

    it("undefined -> []", () => {
        expect(slice(undefined))
            .toStrictEqual([]);
    });

    it("null -> []", () => {
        expect(slice(null))
            .toStrictEqual([]);
    });

    it("NaN -> []", () => {
        expect(slice(NaN))
            .toStrictEqual([]);
    });
});
