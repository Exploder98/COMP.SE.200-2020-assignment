/**
 * map-funktion yksikkötestit
 *
 * @group unit
 */

import map from "../../src/map.js";


describe("unit/map", () => {
    it("[\"moi\"], () => {return false} -> [false]", () => {
        expect(map(["moi"], () => {return false}))
            .toStrictEqual([false]);
    });

    it("[\"vastaus kaikkeen\"], () => {return 42} -> [42]", () => {
        expect(map(["vastaus kaikkeen"], () => {return 42}))
            .toStrictEqual([42]);
    });
    
    it("[1, 2, 3, 4, 5], (arg) => {return arg * 2} -> [2, 4, 6, 8, 10]", () => {
        expect(map([1, 2, 3, 4, 5], (arg) => {return arg * 2}))
            .toStrictEqual([2, 4, 6, 8, 10]);
    });

    it("undefined -> []", () => {
        expect(map(undefined))
            .toStrictEqual([]);
    });

    it("null -> []", () => {
        expect(map(null))
            .toStrictEqual([]);
    });

    it("false -> []", () => {
        expect(map(false))
            .toStrictEqual([]);
    });

    it("2 -> []", () => {
        expect(map(2))
            .toStrictEqual([]);
    });

    it("NaN -> []", () => {
        expect(map(NaN))
            .toStrictEqual([]);
    });
});
