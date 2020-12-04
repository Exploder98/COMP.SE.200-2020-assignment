/**
 * add-funktion yksikkötestit
 *
 * @group unit
 */

import add from "../../src/add.js";


const MAX_INTEGER = 1.7976931348623157e+308;


describe("unit/add", () => {
    it("1 + 1 = 2", () => {
        expect(add(1, 1))
            .toBe(2);
    });

    it("-1 + 1 = 0", () => {
        expect(add(-1, 1))
            .toBe(0);
    });

    it("1 + -1 = 0", () => {
        expect(add(1, -1))
            .toBe(0);
    });

    it("0 + 1 = 1", () => {
        expect(add(0, 1))
            .toBe(1);
    });

    it("1 + 0 = 1", () => {
        expect(add(1, 0))
            .toBe(1);
    });

    it("MAX_INTEGER + 0 = MAX_INTEGER", () => {
        expect(add(MAX_INTEGER, 0))
            .toBe(MAX_INTEGER);
    });

    it("0 + MAX_INTEGER = MAX_INTEGER", () => {
        expect(add(0, MAX_INTEGER))
            .toBe(MAX_INTEGER);
    });

    it("MAX_INTEGER + MAX_INTEGER = Infinity", () => {
        expect(add(MAX_INTEGER, MAX_INTEGER))
            .toBe(Infinity);
    });
});
