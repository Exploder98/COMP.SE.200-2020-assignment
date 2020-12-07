/**
 * reduce-funktion yksikkötestit
 *
 * @group unit
 */

import reduce from "../../src/reduce.js";


const reduceFunc = jest.fn((sum, arg) => {
    return sum + arg;
});


describe("unit/reduce", () => {
    it("Kutsuu funktiota jokaiselle syötteen alkiolle", () => {
        reduceFunc.mockClear();
        expect(reduce([1, 2], reduceFunc, 0))
            .toBe(3);
        expect(reduceFunc.mock.calls.length)
            .toBe(2);
    });

    it("Toimii objekteilla", () => {
        reduceFunc.mockClear();
        expect(reduce({"a": 1, "b": 2}, reduceFunc, 0))
            .toBe(3);
        expect(reduceFunc.mock.calls.length)
            .toBe(2);
    });
});
