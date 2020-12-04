/**
 * countBy-funktion integraatiotestit
 *
 * @group integration
 */

import countBy from "../../src/countBy.js";


describe("integration/countBy", () => {
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
