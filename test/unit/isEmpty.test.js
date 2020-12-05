/**
 * isEmpty-funktion yksikkötestit
 *
 * @group unit
 */

import isEmpty from "../../src/isEmpty.js";
import isArguments from '../../src/isArguments.js';
import isArrayLike from '../../src/isArrayLike.js';
import isBuffer from '../../src/isBuffer.js';
import isTypedArray from '../../src/isTypedArray.js';

jest.mock("../../src/isArguments.js");
jest.mock("../../src/isArrayLike.js");
jest.mock("../../src/isBuffer.js");
jest.mock("../../src/isTypedArray.js");

describe("unit/isEmpty", () => {
    
    it("null -> true", () => {
        expect(isEmpty(null))
            .toBe(true);
    });

    isArrayLike.mockReturnValueOnce(false);
    it("true -> true", () => {
        expect(isEmpty(true))
            .toBe(true);
    });

    isArrayLike.mockReturnValueOnce(false);
    it("1 -> true", () => {
        expect(isEmpty(1))
            .toBe(true);
    });

    isArrayLike.mockReturnValueOnce(true);
    it("[1, 2, 3] -> false", () => {
        expect(isEmpty([1, 2, 3]))
            .toBe(false);
    });

    isArrayLike.mockReturnValueOnce(false);
    it("\"abc\" -> false", () => {
        expect(isEmpty("abc"))
            .toBe(false);
    });

    isArrayLike.mockReturnValueOnce(false);
    it("{\"a\": 1} -> false", () => {
        expect(isEmpty({"a": 1}))
            .toBe(false);
    });

    isArrayLike.mockReturnValueOnce(false);
    it("{} -> true", () => {
        expect(isEmpty({}))
            .toBe(true);
    });

    isArrayLike.mockReturnValueOnce(true);
    it("[] -> true", () => {
        expect(isEmpty([]))
            .toBe(true);
    });

    isArrayLike.mockReturnValueOnce(false);
    it("new Buffer(0) -> true", () => {
        expect(isEmpty(new Buffer(0)))
            .toBe(true);
    });

    isArrayLike.mockReturnValueOnce(false);
    it("new Buffer(1) -> false", () => {
        expect(isEmpty(new Buffer(1)))
            .toBe(false);
    });

    isArrayLike.mockReturnValueOnce(true);
    isBuffer.mockReturnValueOnce(false);
    isTypedArray.mockReturnValueOnce(false);
    isArguments.mockReturnValueOnce(true);
    it("function(arg) {return arguments}(\"moi\") -> false", () => {
        expect(isEmpty(function(arg) {return arguments}("moi")))
            .toBe(false);
    });

    isArrayLike.mockReturnValueOnce(true);
    isBuffer.mockReturnValueOnce(false);
    isTypedArray.mockReturnValueOnce(false);
    isArguments.mockReturnValueOnce(true);
    it("function() {return arguments}() -> true", () => {
        expect(isEmpty(function() {return arguments}()))
            .toBe(true);
    });
});
