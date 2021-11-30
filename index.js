const sayFaveColour = (person) => {
  const faveColours = {
    August: 'lightcoral',
    Haz: 'atomic tangerine',
    Poonam: 'ube',
    Paul: 'viridian green',
    Ant: 'deeppink',
    Sarah: 'cobalt',
  };

  console.log(`${person}'s favourite colour is ${faveColours[person]}.`);
};

sayFaveColour('August');
sayFaveColour('Haz');
