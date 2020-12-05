/**
 * filter-funktion yksikkötestit
 *
 * @group unit
 */

import filter from "../../src/filter.js";


describe("unit/every", () => {
    it("[{ \'user\': \'barney\', \'active\': true }, { \'user\': \'fred\',   \'active\': false }], ({ active }) => active -> [{ 'user': 'barney', 'active': true }]", () => {
        expect(filter([{ 'user': 'barney', 'active': true },{ 'user': 'fred',   'active': false }], ({ active }) => active))
            .toStrictEqual([{ 'user': 'barney', 'active': true }]);
    });
    
    it("[1, 2, 3], Boolean -> [1, 2, 3]", () => {
        expect(filter([1, 2, 3], Boolean))
            .toStrictEqual([1, 2, 3]);
    });
    
    it("[1, 2, 3], () => {return false} -> []", () => {
        expect(filter([1, 2, 3], () => {return false}))
            .toStrictEqual([]);
    });
    
    it("[1, 2, 3], () => {return true} -> [1, 2, 3]", () => {
        expect(filter([1, 2, 3], () => {return true}))
            .toStrictEqual([1, 2, 3]);
    });
});
