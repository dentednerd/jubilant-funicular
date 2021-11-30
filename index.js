const sayFaveColour = (person) => {
  const faveColours = {
    August: 'lightcoral',
    Haz: 'atomic tangerine',
    Poonam: 'ube',
    Paul: 'viridian green',
    Ant: 'deeppink',
    Sarah: 'cobalt',
    Joey: 'violet',
  };

  const string = `${person}'s favourite colour is ${faveColours[person]}.`;

  console.log(string);
  return string;
};

sayFaveColour('August');
sayFaveColour('Haz');
sayFaveColour('Ant');
sayFaveColour('Poonam'); // oh no, a change from elsewhere!

module.exports = { sayFaveColour };
