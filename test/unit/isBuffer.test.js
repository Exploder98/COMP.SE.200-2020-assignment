/**
 * isBuffer-funktion yksikkötestit
 *
 * @group unit
 */

import isBuffer from "../../src/isBuffer.js";


describe("unit/isBuffer", () => {
    it("new Buffer(2) -> true", () => {
        expect(isBuffer(new Buffer(2)))
            .toBe(true);
    });

    it("new Uint8Array(2) -> false", () => {
        expect(isBuffer(new Uint8Array(2)))
            .toBe(false);
    });

    it("\"Buffer\" -> false", () => {
        expect(isBuffer("Buffer"))
            .toBe(false);
    });

    it("null -> false", () => {
        expect(isBuffer(null))
            .toBe(false);
    });

    it("undefined -> false", () => {
        expect(isBuffer(undefined))
            .toBe(false);
    });

    it("NaN -> false", () => {
        expect(isBuffer(Nan))
            .toBe(false);
    });

    it("[1, 2, 3] -> false", () => {
        expect(isBuffer([1, 2, 3]))
            .toBe(false);
    });
});
