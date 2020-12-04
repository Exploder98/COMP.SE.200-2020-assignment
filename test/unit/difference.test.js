/**
 * difference-funktion yksikkötestit
 *
 * @group unit
 */

import difference from "../../src/difference.js";
import isArrayLikeObject from '../../src/isArrayLikeObject.js'


jest.mock("../../src/isArrayLikeObject.js");


describe("unit/diffference", () => {
    isArrayLikeObject.mockReturnValueOnce(true).mockReturnValueOnce(true);
    it("[2, 1], [2, 3]-> [1]", () => {
        expect(difference([2, 1], [2, 3]))
            .toStrictEqual([1]);
    });

    isArrayLikeObject.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true);
    it("[2, 1], [2, 3], [1, 4]-> []", () => {
        expect(difference([2, 1], [2, 3], [1, 4]))
            .toStrictEqual([]);
    });

    isArrayLikeObject.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true);
    it("[2, 1], [2, 3], [\"1\"]-> [1]", () => {
        expect(difference([2, 1], [2, 3], ["1"]))
            .toStrictEqual([1]);
    });

    isArrayLikeObject.mockReturnValueOnce(false);
    it("null-> []", () => {
        expect(difference(null))
            .toStrictEqual([]);
    });
    
    isArrayLikeObject.mockReturnValueOnce(false);
    it("undefined-> []", () => {
        expect(difference(undefined))
            .toStrictEqual([]);
    });
    
    isArrayLikeObject.mockReturnValueOnce(true).mockReturnValueOnce(true);
    it("[NaN], [NaN]-> []", () => {
        expect(difference([NaN], [NaN]))
            .toStrictEqual([]);
    });
});

