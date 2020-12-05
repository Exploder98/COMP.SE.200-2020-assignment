/**
 * isBoolean-funktion yksikkötestit
 *
 * @group unit
 */

import isBoolean from "../../src/isBoolean.js";
import isObjectLike from "../../src/isObjectLike.js";


jest.mock("../../src/isObjectLike.js");


describe("unit/isBoolean", () => {
    
    it("false -> true", () => {
        expect(isBoolean(false))
            .toBe(true);
    });
    
    it("true -> true", () => {
        expect(isBoolean(true))
            .toBe(true);
    });
    isObjectLike.mockReturnValueOnce(true);
    it("Boolean(false) -> true", () => {
        expect(isBoolean(Boolean(false)))
            .toBe(true);
    });
    isObjectLike.mockReturnValueOnce(true);
    it("Boolean(true) -> true", () => {
        expect(isBoolean(Boolean(true)))
            .toBe(true);
    });
    isObjectLike.mockReturnValueOnce(true);
    it("{true: true} -> false", () => {
        expect(isBoolean({true: true}))
            .toBe(false);
    });
    isObjectLike.mockReturnValueOnce(false);
    it("\"true\" -> false", () => {
        expect(isBoolean("true"))
            .toBe(false);
    });
    isObjectLike.mockReturnValueOnce(false);
    it("1 -> false", () => {
        expect(isBoolean(1))
            .toBe(false);
    });
    isObjectLike.mockReturnValueOnce(false);
    it("() => {return true} -> false", () => {
        expect(isBoolean(() => {return true}))
            .toBe(false);
    });
    isObjectLike.mockReturnValueOnce(false);
    it("null -> false", () => {
        expect(isBoolean(null))
            .toBe(false);
    });
    isObjectLike.mockReturnValueOnce(false);
    it("undefined -> false", () => {
        expect(isBoolean(undefined))
            .toBe(false);
    });
    isObjectLike.mockReturnValueOnce(false);
    it("NaN -> false", () => {
        expect(isBoolean(NaN))
            .toBe(false);
    });
});
