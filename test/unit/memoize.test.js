/**
 * memoize-funktion yksikkötestit
 *
 * @group unit
 */

import memoize from "../../src/memoize.js";


const square = jest.fn(arg => {
    return arg * arg;
});

const sum = jest.fn((arg1, arg2) => {
    return arg1 + arg2;
});


describe("unit/memoize", () => {
    it("Vastaa alkuperäistä funktiota", () => {
        const memSquare = memoize(square);

        expect(memSquare(2))
            .toBe(square(2));

        expect(memSquare(2))
            .toBe(square(2));

        expect(memSquare(3))
            .toBe(square(3));
    });

    it("Käyttää oletuksena ensimmäistä parametria cachen avaimena", () => {
        const memSum = memoize(sum);

        expect(memSum(1, 1))
            .toBe(sum(1, 1));

        expect(memSum(1, 2))
            .toBe(sum(1, 1));
    });

    it("Antaa määritellä oman resolverin cachen avaimelle", () => {
        const memSum = memoize(sum, (arg1, arg2) => arg1 + arg2);

        expect(memSum(1, 1))
            .toBe(sum(1, 1));

        expect(memSum(1, 2))
            .toBe(sum(1, 2));

        expect(memSum(1, 2))
            .not.toBe(sum(1, 1));
    });

    it("Tallentaa cacheen paluuarvon syötteen perusteella", () => {
        const memSquare = memoize(square);
        memSquare(2);
        expect(memSquare.cache.has(2))
            .toBe(true);

        expect(memSquare.cache.get(2))
            .toBe(square(2));
    });

    it("Hakee paluuarvon cachesta, jos se on tallennettu sinne", () => {
        const memSquare = memoize(square);
        const spyGet = jest.spyOn(memSquare.cache, 'get');
        const spySet = jest.spyOn(memSquare.cache, 'set');

        memSquare(2);
        expect(square).toHaveBeenCalled();
        expect(spySet).toHaveBeenCalled();
        expect(memSquare.cache.set.mock.calls)
            .toEqual([[2, square(2)]]);

        square.mockClear();

        memSquare(2);
        expect(square).not.toHaveBeenCalled();
        expect(spyGet).toHaveBeenCalled();
        expect(memSquare.cache.get.mock.calls)
            .toEqual([[2]]);
    });

    it("Antaa virheen, jos ensimmäinen parametri ei ole funktio", () => {
        expect(() => memoize(42))
            .toThrow();
    });

    it("Antaa virheen, jos resolveriksi annetaan ei-funktio", () => {
        expect(() => memoize(square, 42))
            .toThrow();
    });
});
