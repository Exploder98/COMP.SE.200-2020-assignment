/**
 * camelCase-funktion yksikkötestit
 *
 * @group unit
 */

import chunk from "../../src/chunk.js";
import toInteger from '../../src/toInteger.js';


jest.mock("../../src/toInteger.js");


describe("unit/chunk", () => {
    toInteger.mockReturnValueOnce(1);
    it("[\"a\", \"b\", \"c\", \"d\"] -> [[\"a\"], [\"b\"], [\"c\"], [\"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"]))
            .toStrictEqual([["a"], ["b"], ["c"], ["d"]]);
    });

    toInteger.mockReturnValueOnce(2).mockReturnValueOnce(2).mockReturnValueOnce(2);
    it("[\"a\", \"b\", \"c\", \"d\"], 2 -> [[\"a\", \"b\"], [\"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], 2 ))
            .toStrictEqual([["a", "b"], ["c", "d"]]);
    });

    it("[\"a\", \"b\", \"c\", \"d\"], 2.5 -> [[\"a\", \"b\"], [\"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], 2.5 ))
            .toStrictEqual([["a", "b"], ["c", "d"]]);
    });

    it("[\"a\", \"b\", \"c\", \"d\"], \"2\" -> [[\"a\", \"b\"], [\"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], "2" ))
            .toStrictEqual([["a", "b"], ["c", "d"]]);
    });

    toInteger.mockReturnValueOnce(3);
    it("[\"a\", \"b\", \"c\", \"d\"], 3 -> [[\"a\", \"b\", \"c\"], [\"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], 3 ))
            .toStrictEqual([["a", "b", "c"], [ "d"]]);
    });

    toInteger.mockReturnValueOnce(4);
    it("[\"a\", \"b\", \"c\", \"d\"], 4 -> [[\"a\", \"b\", \"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], 4 ))
            .toStrictEqual([["a", "b", "c", "d"]]);
    });

    toInteger.mockReturnValueOnce(Infinity);
    it("[\"a\", \"b\", \"c\", \"d\"], Infinity -> [[\"a\", \"b\", \"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], Infinity ))
            .toStrictEqual([["a", "b", "c", "d"]]);
    });

    toInteger.mockReturnValueOnce(NaN);
    it("[\"a\", \"b\", \"c\", \"d\"], NaN -> []", () => {
        expect(chunk(["a", "b", "c", "d"], NaN ))
            .toStrictEqual([]);
    });

    toInteger.mockReturnValueOnce(0);
    it("[\"a\", \"b\", \"c\", \"d\"], 0 -> []", () => {
        expect(chunk(["a", "b", "c", "d"], 0 ))
            .toStrictEqual([]);
    });

    toInteger.mockReturnValueOnce(1);
    it("undefined -> []", () => {
        expect(chunk(undefined))
            .toStrictEqual([]);
    });

    toInteger.mockReturnValueOnce(1);
    it("null -> []", () => {
        expect(chunk(null))
            .toStrictEqual([]);
    });
    
    toInteger.mockReturnValueOnce(1);
    it("NaN -> []", () => {
        expect(chunk(NaN))
            .toStrictEqual([]);
    });
});
