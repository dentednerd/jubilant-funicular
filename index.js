const sayFaveColour = (person) => {
  const faveColours = {
    "August": "purple",
    "Haz": "atomic tangerine",
    "Poonam": "ube",
  };

  console.log(`${person}'s favourite colour is ${faveColours[person]}.`)
};

sayFaveColour("August");
sayFaveColour("Haz");
