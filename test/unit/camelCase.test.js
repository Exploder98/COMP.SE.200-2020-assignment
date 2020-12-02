/* jshint esversion: 6 */

/**
 * camelCase-funktion yksikkötestit
 *
 * @group unit
 */

import camelCase from "../../src/camelCase.js";
import upperFirst from '../../src/upperFirst.js';
import words from '../../src/words.js';
import toString from '../../src/toString.js';


jest.mock("../../src/upperFirst.js");
jest.mock("../../src/words.js");
jest.mock("../../src/toString.js");


describe("unit/camelCase", () => {
    toString.mockImplementation(value => String(value));
    it("\"oHjElMisToN mEsTaUs\" -> \"ohjelmistonMestaus\"", () => {
        words.mockReturnValueOnce(["oHjElMisToN", "mEsTaUs"]);
        upperFirst.mockReturnValueOnce("Mestaus");
        expect(camelCase("oHjElMisToN mEsTaUs"))
            .toBe("ohjelmistonMestaus");
    });
    it("\"__FEELS_BATMAN???\" -> \"feelsBatman\"", () => {
        words.mockReturnValueOnce(["FEELS", "BATMAN"]);
        upperFirst.mockReturnValueOnce("Batman");
        expect(camelCase("__FEELS_BATMAN???"))
            .toBe("feelsBatman");
    });
    it("\"+-joku-_-randomi\" -> \"jokuRandomi\"", () => {
        words.mockReturnValueOnce(["joku", "randomi"]);
        upperFirst.mockReturnValueOnce("Randomi");
        expect(camelCase("+-joku-_-randomi"))
            .toBe("jokuRandomi");
    });
    it("\"42\" -> \"42\"", () => {
        words.mockReturnValueOnce(["42"]);
        expect(camelCase("42"))
            .toBe("42");
    });
    it("NaN -> \"nan\"", () => {
        words.mockReturnValueOnce(["NaN"]);
        expect(camelCase(NaN))
            .toBe("nan");
    });
    it("undefined -> \"undefined\"", () => {
        words.mockReturnValueOnce(["undefined"]);
        expect(camelCase(undefined))
            .toBe("undefined");
    });
    it("null -> \"null\"", () => {
        words.mockReturnValueOnce(["null"]);
        expect(camelCase(null))
            .toBe("null");
    });
});
