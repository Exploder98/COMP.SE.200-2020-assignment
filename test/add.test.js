/* jshint esversion: 6 */
import add from "../src/add.js";


test("Lisää 1 ja 1", () => {
    expect(add(1, 1))
        .toBe(2);
});