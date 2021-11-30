const { sayFaveColour } = require('../index');

describe('#sayFaveColour', () => {
  it("returns a string with a person's name and favourite colour", () => {
    const actual = sayFaveColour('Haz');
    const expected = "Haz's favourite colour is atomic tangerine.";
    expect(actual).toEqual(expected);
  });
});
