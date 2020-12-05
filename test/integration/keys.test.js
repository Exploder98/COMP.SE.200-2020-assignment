/**
 * keys-funktion integraatiotestit
 *
 * @group integration
 */

import keys from "../../src/keys.js";


function Foo() {this.a = 1; this.b = 2};

describe("integration/keys", () => {
    it("new Foo -> [\"a\", \"b\"]", () => {
        expect(keys(new Foo))
            .toStrictEqual(["a", "b"]);
    });
    
    it("\"42\" -> [\"0\",\"1\"]", () => {
        expect(keys("42"))
            .toStrictEqual(["0", "1"]);
    });
    
    it("{\"vastaus\": 42, \"kaikkeen\": 42} -> [\"vastaus\",\"kaikkeen\"]", () => {
        expect(keys({"vastaus": 42, "kaikkeen": 42}))
            .toStrictEqual(["vastaus", "kaikkeen"]);
    });
    
    it("null -> []", () => {
        expect(keys(null))
            .toStrictEqual([]);
    });
    
    it("undefined -> []", () => {
        expect(keys(undefined))
            .toStrictEqual([]);
    });
    
    it("NaN -> []", () => {
        expect(keys(NaN))
            .toStrictEqual([]);
    });
    
    it("1 -> []", () => {
        expect(keys(1))
            .toStrictEqual([]);
    });
    
    it("Symbol([1, 2, 3]) -> []", () => {
        expect(keys(Symbol([1, 2, 3])))
            .toStrictEqual([]);
    });
    
    it("true -> []", () => {
        expect(keys(true))
            .toStrictEqual([]);
    });
});
