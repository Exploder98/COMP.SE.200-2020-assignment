/**
 * words-funktion yksikkötestit
 *
 * @group unit
 */

import words from "../../src/words.js";


describe("unit/words", () => {
    it("\"\" -> []", () => {
        expect(words(""))
            .toStrictEqual([]);
    });

    it("\"bruh moment\" -> [\"bruh\", \"moment\"]", () => {
        expect(words("bruh moment"))
            .toStrictEqual(["bruh", "moment"]);
    });

    it("\"Eerik, & Esko\" -> [\"Eerik\", \"Esko\"]", () => {
        expect(words("Eerik, & Esko"))
            .toStrictEqual(["Eerik", "Esko"]);
    });

    it("\"Eerik, & Esko\", /[^, ]+/g -> [\"Eerik\", \"&\", \"Esko\"]", () => {
        expect(words("Eerik, & Esko",/[^, ]+/g))
            .toStrictEqual(["Eerik", "&", "Esko"]);
    });

    it("\"eErIk ja ESKO\" -> [\"e\", \"Er\", \"Ik\", \"ja\", \"ESKO\"]", () => {
        expect(words("eErIk ja ESKO"))
            .toStrictEqual(["e", "Er", "Ik", "ja", "ESKO"]);
    });

    it("null -> []", () => {
        expect(words(null))
            .toStrictEqual([]);
    });

    it("undefined -> []", () => {
        expect(words(undefined))
            .toStrictEqual([]);
    });

    it("NaN -> []", () => {
        expect(words(NaN))
            .toStrictEqual([]);
    });

    it("3.2 -> \"3.2\"", () => {
        expect(words(3.2))
            .toStrictEqual("3.2");
    });
});
