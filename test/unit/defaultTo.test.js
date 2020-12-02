/* jshint esversion: 6 */

/**
 * defaultTo-funktion yksikkötestit
 *
 * @group unit
 */

import defaultTo from "../../src/defaultTo.js";


describe("unit/defaultTo", () => {
    it("value hyvin määritelty", () => {
        expect(defaultTo(1, 2))
            .toBe(1);
    });

    it("value NaN", () => {
        expect(defaultTo(NaN, 2))
            .toBe(2);
    });

    it("value null", () => {
        expect(defaultTo(null, 2))
            .toBe(2);
    });

    it("value undefined", () => {
        expect(defaultTo(undefined, 2))
            .toBe(2);
    });

    it("value null, default NaN", () => {
        expect(defaultTo(null, NaN))
            .toBe(NaN);
    });

    it("value {\"a\": null}, default 42", () => {
        expect(defaultTo({"a": null}, 42))
            .toStrictEqual({"a": null});
    });
});
