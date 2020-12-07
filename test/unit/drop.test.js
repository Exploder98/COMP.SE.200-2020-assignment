/**
 * drop-funktion yksikkötestit
 *
 * @group unit
 */

import drop from "../../src/drop.js";
import slice from "../../src/slice.js";
import toInteger from "../../src/toInteger.js";


jest.mock("../../src/slice.js");
jest.mock("../../src/toInteger.js");


describe("unit/drop", () => {

    slice.mockImplementation((array, start, end) => {
        if (start > array.length) {
            return [];
        }
        const result = new Array(end - start);
        let index = -1;
        while (++index < (end - start)) {
            result[index] = array[start + index];
        }
        return result;
    });

    it("Oletusdroppausmäärä (n=1) (dokumentaatioesimerkki)", () => {
        toInteger.mockReturnValueOnce(1);
        expect(drop([1, 2, 3]))
            .toStrictEqual([2, 3]);
    });

    it("Dropataan 2 alkiota (dokumentaatioesimerkki)", () => {
        toInteger.mockReturnValueOnce(2);
        expect(drop([1, 2, 3], 2))
            .toStrictEqual([3]);
    });

    it("Dropataan enemmän alkioita kuin listassa on (dokumentaatioesimerkki)", () => {
        toInteger.mockReturnValueOnce(5);
        expect(drop([1, 2, 3], 5))
            .toStrictEqual([]);
    });

    it("Dropataan 0 alkiota (dokumentaatioesimerkki)", () => {
        toInteger.mockReturnValueOnce(0);
        expect(drop([1, 2, 3], 0))
            .toStrictEqual([1, 2, 3]);
    });

    it("Dropataan NaN alkiota", () => {
        toInteger.mockReturnValueOnce(0);
        expect(drop([1, 2, 3], NaN))
            .toStrictEqual([1, 2, 3]);
    });

    it("Dropataan Infinity alkiota", () => {
        toInteger.mockReturnValueOnce(Infinity);
        expect(drop([1, 2, 3], Infinity))
            .toStrictEqual([]);
    });

    it("Dropataan -1 alkiota", () => {
        expect(drop([1, 2, 3], -1))
            .toStrictEqual([1, 2, 3]);
    });

    it("Dropataan alkioita objektista", () => {
        toInteger.mockReturnValueOnce(2);
        expect(drop({}, 2))
            .toStrictEqual([]);
    });

    it("Dropataan null-objektista", () => {
        toInteger.mockReturnValueOnce(0);
        expect(drop(null, 0))
            .toStrictEqual([]);
    });

    it("Dropataan null-objektista -1 alkiota", () => {
        toInteger.mockReturnValueOnce(-1);
        expect(drop(null, -1))
            .toStrictEqual([]);
    });
});
