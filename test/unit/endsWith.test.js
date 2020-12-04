/**
 * endsWith-funktion yksikkötestit
 *
 * @group unit
 */

import endsWith from "../../src/endsWith.js";


describe("unit/endsWith", () => {
    it("\"abc\", \"c\" -> true", () => {
        expect(endsWith("abc","c"))
            .toBe(true);
    });

    it("\"abc\", \"b\" -> false", () => {
        expect(endsWith("abc","b"))
            .toBe(false);
    });

    it("\"abc\", \"b\", 2 -> true", () => {
        expect(endsWith("abc","b", 2))
            .toBe(true);
    });

    it("\"\", \"\" -> true", () => {
        expect(endsWith("",""))
            .toBe(true);
    });

    it("undefined, \"d\" -> false", () => {
        expect(endsWith(undefined,"d"))
            .toBe(false);
    });

    it("2, \"o\" -> false", () => {
        expect(endsWith(2,"o"))
            .toBe(false);
    });

    it("\"abc\", \"a\", -2 -> false", () => {
        expect(endsWith("abc","a", -2))
            .toBe(false);
    });

    it("\"abc\", \"c\", 4 -> true", () => {
        expect(endsWith("abc","c", 4))
            .toBe(true);
    });
});
