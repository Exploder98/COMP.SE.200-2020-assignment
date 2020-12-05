/**
 * isBoolean-funktion integraatiotestit
 *
 * @group integration
 */

import isBoolean from "../../src/isBoolean.js";


describe("integration/isBoolean", () => {
    it("false -> true", () => {
        expect(isBoolean(false))
            .toBe(true);
    });
    
    it("true -> true", () => {
        expect(isBoolean(true))
            .toBe(true);
    });
    
    it("Boolean(false) -> true", () => {
        expect(isBoolean(Boolean(false)))
            .toBe(true);
    });
    
    it("Boolean(true) -> true", () => {
        expect(isBoolean(Boolean(true)))
            .toBe(true);
    });
    
    it("{true} -> false", () => {
        expect(isBoolean({true: true}))
            .toBe(false);
    });
    
    it("\"true\" -> false", () => {
        expect(isBoolean("true"))
            .toBe(false);
    });
    
    it("1 -> false", () => {
        expect(isBoolean(1))
            .toBe(false);
    });
    
    it("() => {return true} -> false", () => {
        expect(isBoolean(() => {return true}))
            .toBe(false);
    });
    
    it("null -> false", () => {
        expect(isBoolean(null))
            .toBe(false);
    });
    
    it("undefined -> false", () => {
        expect(isBoolean(undefined))
            .toBe(false);
    });
    
    it("NaN -> false", () => {
        expect(isBoolean(NaN))
            .toBe(false);
    });
});
