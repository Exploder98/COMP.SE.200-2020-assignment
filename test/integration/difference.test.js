/**
 * difference-funktion integraatiotestit
 *
 * @group integration
 */

import difference from "../../src/difference.js";


describe("integration/diffference", () => {
    it("[2, 1], [2, 3]-> [1]", () => {
        expect(difference([2, 1], [2, 3]))
            .toStrictEqual([1]);
    });

    it("[2, 1], [2, 3], [1, 4]-> []", () => {
        expect(difference([2, 1], [2, 3], [1, 4]))
            .toStrictEqual([]);
    });

    it("[2, 1], [2, 3], [\"1\"]-> [1]", () => {
        expect(difference([2, 1], [2, 3], ["1"]))
            .toStrictEqual([1]);
    });

    it("null-> []", () => {
        expect(difference(null))
            .toStrictEqual([]);
    });
    
    it("undefined-> []", () => {
        expect(difference(undefined))
            .toStrictEqual([]);
    });
    
    it("[NaN], [NaN]-> []", () => {
        expect(difference([NaN], [NaN]))
            .toStrictEqual([]);
    });
});
