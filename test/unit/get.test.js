/**
 * get-funktion yksikkötestit
 *
 * @group unit
 */

import get from "../../src/get.js";


const object = {"a": [{"b": {"c": 3, "d": undefined}}, "rekt"]}

describe("unit/get", () => {
    it("object, \"a[0].b.c\", \"hei\" -> 3", () => {
        expect(get(object, "a[0].b.c", "hei"))
            .toStrictEqual(3);
    });
    
    it("object, [\"a\", \"0\", \"b\", \"c\"], \"hei\" -> 3", () => {
        expect(get(object, ["a", "0", "b", "c"], "hei"))
            .toStrictEqual(3);
    });
    
    it("object, [\"a\", \"0\", \"b\", \"d\"], \"kukkuu\" -> \"kukkuu\"", () => {
        expect(get(object, ["a", "0", "b", "d"], "kukkuu"))
            .toStrictEqual("kukkuu");
    });
    
    it("object, \"a[0].b.d\", 42 -> 42", () => {
        expect(get(object, "a[0].b.d", 42))
            .toStrictEqual(42);
    });
    
    it("object, \"a[1]\", \"get\" -> rekt", () => {
        expect(get(object, "a[1]", "get"))
            .toStrictEqual("rekt");
    });
});
