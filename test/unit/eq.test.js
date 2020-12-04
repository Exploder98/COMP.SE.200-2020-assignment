/**
 * eq-funktion yksikkötestit
 *
 * @group unit
 */

import eq from "../../src/eq.js";


const object = {"a": 1}
const other = {"a": 1}


describe("unit/eq", () => {
    it("object == object -> true", () => {
        expect(eq(object, object))
            .toBe(true);
    });

    it("object == other -> false", () => {
        expect(eq(object, other))
            .toBe(false);
    });

    it("\"a\" == \"a\" -> true", () => {
        expect(eq("a", "a"))
            .toBe(true);
    });

    it("\"a\" == Object(\"a\") -> false", () => {
        expect(eq("a", Object("a")))
            .toBe(false);
    });

    it("NaN == NaN -> true", () => {
        expect(eq(NaN, NaN))
            .toBe(true);
    });

    it("null == null -> true", () => {
        expect(eq(null, null))
            .toBe(true);
    });

    it("undefined == undefined -> true", () => {
        expect(eq(undefined, undefined))
            .toBe(true);
    });

    it("undefined == null -> true", () => {
        expect(eq(undefined, null))
            .toBe(true);
    });
});
