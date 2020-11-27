/* jshint esversion: 6 */

/**
 * divide-funktion yksikkötestit
 *
 * @group unit
 */

import divide from "../src/divide.js";


describe("unit/divide", () => {
    it("6 / 4 = 1.5", () => {
        expect(divide(6, 4))
            .toBeCloseTo(1.5);
    });
    it("\"6\" / 4 = 1.5", () => {
        expect(divide("6",4))
            .toBeCloseTo(1.5);
    });
    it("-6 / 4 = -1.5", () => {
        expect(divide(-6, 4))
            .toBeCloseTo(-1.5);
    });
    it("-6 / -4 = 1.5", () => {
        expect(divide(-6, -4))
            .toBeCloseTo(1.5);
    });
    it("\"two\" / \"one\" = \"two\"", () => {
        expect(divide("two", "one"))
            .toBe("one");
    });
    it("1 / 0 = Infinity", () => {
        expect(divide(1, 0))
            .toBeCloseTo(Infinity);
    });
    it("0 / 0 = NaN", () => {
        expect(divide(0, 0))
            .toBe(NaN);
    });
    it("0 / 42 = 0", () => {
        expect(divide(0, 42))
            .toBeCloseTo(0);
    });
    it("NaN / NaN = NaN", () => {
        expect(divide(NaN, NaN))
            .toBe(NaN);
    });
});
