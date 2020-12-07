/**
 * ceil-funktion yksikkötestit
 *
 * @group unit
 */

import ceil from "../../src/ceil.js";

describe("unit/ceil", () => {
    it("1, -> 1", () => {
        expect(ceil(1))
            .toStrictEqual(1);
    });

    it("4.006, -> 5", () => {
        expect(ceil(4.006))
            .toStrictEqual(5);
    });

    it("6.004, 2 -> 6.01", () => {
        expect(ceil(6.004,2))
            .toStrictEqual(6.01);
    });

    it("6040, -2 -> 6100", () => {
        expect(ceil(6040,-2))
            .toStrictEqual(6100);
    });

    it("-1.2, -> -1", () => {
        expect(ceil(-1.2))
            .toStrictEqual(-1);
    });

    it("undefined, -> NaN", () => {
        expect(ceil(undefined))
            .toStrictEqual(NaN);
    });

    it("null, -> 0", () => {
        expect(ceil(null))
            .toBe(0);
    });

    it("NaN, -> NaN", () => {
        expect(ceil(NaN))
            .toStrictEqual(NaN);
    });
});