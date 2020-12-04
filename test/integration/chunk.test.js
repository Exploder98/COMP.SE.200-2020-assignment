/**
 * chunk-funktion integraatiotestit
 *
 * @group integration
 */

import chunk from "../../src/chunk.js";


describe("integration/chunk", () => {
    it("[\"a\", \"b\", \"c\", \"d\"] -> [[\"a\"], [\"b\"], [\"c\"], [\"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"]))
            .toStrictEqual([["a"], ["b"], ["c"], ["d"]]);
    });

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

    it("[\"a\", \"b\", \"c\", \"d\"], \"kaksi\" -> [[\"a\", \"b\"], [\"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], "kaksi" ))
            .toStrictEqual([["a", "b"], ["c", "d"]]);
    });

    it("[\"a\", \"b\", \"c\", \"d\"], 3 -> [[\"a\", \"b\", \"c\"], [\"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], 3 ))
            .toStrictEqual([["a", "b", "c"], [ "d"]]);
    });

    it("[\"a\", \"b\", \"c\", \"d\"], 4 -> [[\"a\", \"b\", \"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], 4 ))
            .toStrictEqual([["a", "b", "c", "d"]]);
    });

    it("[\"a\", \"b\", \"c\", \"d\"], Infinity -> [[\"a\", \"b\", \"c\", \"d\"]]", () => {
        expect(chunk(["a", "b", "c", "d"], Infinity ))
            .toStrictEqual([["a", "b", "c", "d"]]);
    });

    it("[\"a\", \"b\", \"c\", \"d\"], NaN -> []", () => {
        expect(chunk(["a", "b", "c", "d"], NaN ))
            .toStrictEqual([]);
    });

    it("[\"a\", \"b\", \"c\", \"d\"], 0 -> []", () => {
        expect(chunk(["a", "b", "c", "d"], 0 ))
            .toStrictEqual([]);
    });

    it("undefined -> []", () => {
        expect(chunk(undefined))
            .toStrictEqual([]);
    });

    it("null -> []", () => {
        expect(chunk(null))
            .toStrictEqual([]);
    });

    it("NaN -> []", () => {
        expect(chunk(NaN))
            .toStrictEqual([]);
    });
});
