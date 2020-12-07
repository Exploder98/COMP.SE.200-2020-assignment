/**
 * drop-funktion integraatiotestit
 *
 * @group integration
 */

import drop from "../../src/drop.js";


describe("integration/drop", () => {
    it("Oletusdroppausmäärä (n=1) (dokumentaatioesimerkki)", () => {
        expect(drop([1, 2, 3]))
            .toStrictEqual([2, 3]);
    });

    it("Dropataan 2 alkiota (dokumentaatioesimerkki)", () => {
        expect(drop([1, 2, 3], 2))
            .toStrictEqual([3]);
    });

    it("Dropataan enemmän alkioita kuin listassa on (dokumentaatioesimerkki)", () => {
        expect(drop([1, 2, 3], 5))
            .toStrictEqual([]);
    });

    it("Dropataan 0 alkiota (dokumentaatioesimerkki)", () => {
        expect(drop([1, 2, 3], 0))
            .toStrictEqual([1, 2, 3]);
    });

    it("Dropataan NaN alkiota", () => {
        expect(drop([1, 2, 3], NaN))
            .toStrictEqual([1, 2, 3]);
    });

    it("Dropataan Infinity alkiota", () => {
        expect(drop([1, 2, 3], Infinity))
            .toStrictEqual([]);
    });

    it("Dropataan alkioita objektista", () => {
        expect(drop({}, 2))
            .toStrictEqual([]);
    });

    it("Dropataan null-objektista", () => {
        expect(drop(null, 0))
            .toStrictEqual([]);
    });

    it("Dropataan null-objektista -1 alkiota", () => {
        expect(drop(null, -1))
            .toStrictEqual([]);
    });
});
