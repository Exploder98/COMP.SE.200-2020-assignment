/**
 * isEmpty-funktion integraatiotestit
 *
 * @group integration
 */

import isEmpty from "../../src/isEmpty.js";


describe("integration/isEmpty", () => {
    it("null -> true", () => {
        expect(isEmpty(null))
            .toBe(true);
    });
    
    it("true -> true", () => {
        expect(isEmpty(true))
            .toBe(true);
    });
    
    it("1 -> true", () => {
        expect(isEmpty(1))
            .toBe(true);
    });
    
    it("[1, 2, 3] -> false", () => {
        expect(isEmpty([1, 2, 3]))
            .toBe(false);
    });
    
    it("\"abc\" -> false", () => {
        expect(isEmpty("abc"))
            .toBe(false);
    });
    
    it("{\"a\": 1} -> false", () => {
        expect(isEmpty({"a": 1}))
            .toBe(false);
    });
    
    it("{} -> true", () => {
        expect(isEmpty({}))
            .toBe(true);
    });
    
    it("[] -> true", () => {
        expect(isEmpty([]))
            .toBe(true);
    });
    
    it("new Buffer(0) -> true", () => {
        expect(isEmpty(new Buffer(0)))
            .toBe(true);
    });
    
    it("new Buffer(1) -> false", () => {
        expect(isEmpty(new Buffer(1)))
            .toBe(false);
    });
    
    it("function(arg) {return arguments}(\"moi\") -> false", () => {
        expect(isEmpty(function(arg) {return arguments}("moi")))
            .toBe(false);
    });
    
    it("function() {return arguments}() -> true", () => {
        expect(isEmpty(function() {return arguments}()))
            .toBe(true);
    });

    it("new Map() -> true", () => {
        expect(isEmpty(new Map()))
            .toBe(true);
    });

    it("Mapissa on tavaraa -> false", () => {
        const map = new Map();
        map.set("vastaus kaikkeen", 42);
        expect(isEmpty(map))
            .toBe(false);
    });

    it("new Set() -> true", () => {
        expect(isEmpty(new Set()))
            .toBe(true);
    });

    it("Setissä on tavaraa -> false", () => {
        const set = new Set();
        set.add(42);
        expect(isEmpty(set))
            .toBe(false);
    });

    it("tyhjä Prototype -> true", () => {
        function Proto(){};
        expect(isEmpty(Proto.prototype))
            .toBe(true);
    });

    it("Prototypessä on tavaraa -> false", () => {
        function Proto2(apinaa){this.value = apinaa};
        Proto2.prototype.value = "koijataan";
        expect(isEmpty(Proto2.prototype))
            .toBe(false);
    });
});
