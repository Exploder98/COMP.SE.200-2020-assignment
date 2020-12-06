/**
 * toString-funktion integraatiotestit
 *
 * @group integration
 */

import toString from "../../src/toString.js";


describe("integration/toString", () => {
    it("4.2 -> \"4.2\"", () => {
        expect(toString(4.2))
            .toBe("4.2");
    });

    it("Symbol(\"test\") -> \"Symbol(\"test\")\"", () => {
        expect(toString(Symbol("test")))
            .toBe("Symbol(test)");
    });
});
