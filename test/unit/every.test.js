/**
 * every-funktion yksikkötestit
 *
 * @group unit
 */

import every from "../../src/every.js";


describe("unit/every", () => {
    it("[true, 1, null, \"yes\"], Boolean-> false", () => {
        expect(every([true, 1, null, "yes"],Boolean))
            .toBe(false);
    });
    
    it("[] -> true", () => {
        expect(every([]))
            .toBe(true);
    });
    
    it("[true], Boolean -> true", () => {
        expect(every([true], Boolean))
            .toBe(true);
    });
    
    it("[true], () => {return false} -> false", () => {
        expect(every([true], () => {return false}))
            .toBe(false);
    });
    
    it("[false], () => {return true} -> true", () => {
        expect(every([false], () => {return true}))
            .toBe(true);
    });
    
    it("[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], Boolean-> false", () => {
        expect(every([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], Boolean))
            .toBe(false);
    });
    
    it("[42], Boolean -> true", () => {
        expect(every([42], Boolean))
            .toBe(true);
    });
    
    it("null, null -> false", () => {
        expect(every(null, null))
            .toBe(true);
    });
    
    it("undefined, undefined -> false", () => {
        expect(every(undefined, undefined))
            .toBe(true);
    });
});
