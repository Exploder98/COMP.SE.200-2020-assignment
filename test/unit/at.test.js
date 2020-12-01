/* jshint esversion: 6 */

/**
 * at-funktion yksikkötestit
 *
 * @group unit
 */

import at from "../../src/at.js";

describe("unit/at", () => {
    it("Tyhjä objekti ja polku", () => {
        expect(at({}, ""))
            .toStrictEqual([]);
    });

    it("Indeksointi objektiin, avain löytyy", () => {
        expect(at({"a": 1}, "a"))
            .toStrictEqual([1]);
    });

    it("Indeksoi objektiin, avainta ei löydy", () => {
        expect(at({"a": 1}, "b"))
            .toStrictEqual([]);
    });

    it("Indeksoi objektiin listan indeksointisyntaksilla", () => {
        expect(at({"a": 1}, "[0]"))
            .toStrictEqual([]);
    });

    it("Indeksoi listaan, indeksi löytyy", () => {
        expect(at([1, 2, 3, 4, 5], "[4]"))
            .toStrictEqual([5]);
    });

    it("Indeksoi 2 kertaa listaan, molemmat löytyvät", () => {
        expect(at([1, 2, 3, 4, 5], ["3", "1"]))
            .toStrictEqual([4, 2]);
    });

    it("Indeksoi listaan listaindeksillä ja olioindeksillä, olioindeksiä ei löyty", () => {
        expect(at([1, 2, 3, 42, 5], ["[3]", "a"]))
            .toStrictEqual([42]);
    });

    it("Indeksoi objektiin 2 kertaa, molemmat löytyvät", () => {
        expect(at({"kaikkeen": 2, "vastaus": 4}, ["vastaus", "kaikkeen"]))
            .toStrictEqual([4, 2]);
    });

    it("Indeksoi objektiin objekti-indeksillä ja listaindeksillä, listaindeksiä ei löydy", () => {
        expect(at({
                "kaikkeen": 7,
                "vastaus": 42
            }, ["vastaus", "[0]"]))
            .toStrictEqual([42]);
    });
});