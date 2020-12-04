/**
 * countBy-funktion integraatiotestit
 *
 * @group integration
 */

import countBy from "../../src/countBy.js";
import reduce from "../../src/reduce.js";


jest.mock("../../src/reduce.js");


function forEach(object, iteratee) {
    const iterable = Object(object);
    const props = Object.keys(object);
    let {
        length
    } = props;
    let index = -1;

    while (length--) {
        const key = props[++index];
        if (iteratee(iterable[key], key, iterable) === false) {
            break;
        }
    }
    return object;
}


describe("unit/countBy", () => {
    const users = [{
            'user': 'barney',
            'active': true
        },
        {
            'user': 'betty',
            'active': true
        },
        {
            'user': 'fred',
            'active': false
        }
    ];

    reduce.mockImplementation((collection, iteratee, accumulator) => {
            let initAccum = arguments.length < 3;
            forEach(collection, (value, index, collection) => {
                accumulator = initAccum ?
                    (initAccum = false, value) :
                    iteratee(accumulator, value, index, collection);
            });
            return accumulator;
        }
    );

    it("Laskee \"active\"-attribuutin arvoja (dokumentaatioesimerkki)", () => {
        expect(countBy(users, value => value.active))
            .toStrictEqual({
                "true": 2,
                "false": 1
            });
    });

    it("Laskee \"user\"-attribuutin arvoja", () => {
        expect(countBy(users, value => value.user))
            .toStrictEqual({
                "barney": 1,
                "betty": 1,
                "fred": 1
            });
    });

    it("Laskee tyhjää", () => {
        expect(countBy([]))
            .toStrictEqual({});
    });

    it("Laskee suoraan arvojen määrää", () => {
        expect(countBy(users, value => value)).
            toStrictEqual({"{ 'user': 'barney', 'active':true }": 1,
            "{ 'user': 'betty','active': true }": 1,
            "{ 'user': 'fred', 'active': false }": 1
        });
    });
});
