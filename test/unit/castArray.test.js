/**
 * castArray-funktion yksikkötestit
 *
 * @group unit
 */

import castArray from "../../src/castArray.js";

describe("unit/castArray", () => {
    it("(tyhjä) -> []", () => {
        expect(castArray())
            .toStrictEqual([]);
    });

    it("1, 2, 3 -> [1, 2, 3]", () => {
        expect(castArray(1, 2, 3))
            .toStrictEqual([1, 2, 3]);
    });

    it("1 -> [1]", () => {
        expect(castArray(1))
            .toStrictEqual([1]);
    });

    it("{\"a\": 1} -> [{\"a\": 1}]", () => {
        expect(castArray({"a": 1}))
            .toStrictEqual([{"a": 1}]);
    });

    it("undefined -> [undefined]", () => {
        expect(castArray(undefined))
            .toStrictEqual([undefined]);
    });

    it("null -> [null]", () => {
        expect(castArray(null))
            .toStrictEqual([null]);
    });

    it("\"abc\" -> [\"abc\"]", () => {
        expect(castArray("abc"))
            .toStrictEqual(["abc"]);
    });

    it("[1, 2, 3] -> [1, 2, 3]", () => {
        expect(castArray([1, 2, 3]))
            .toStrictEqual([1, 2, 3]);
    });
});