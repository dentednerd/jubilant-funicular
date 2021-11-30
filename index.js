const sayFaveColour = (person) => {
  const faveColours = {
    "August": "purple",
    "Haz": "atomic tangerine",
    "Poonam": "ube",
    "Paul": "viridian green",
    "Ant": "deeppink",
    "Sarah": "cobalt"
  };

  console.log(`${person}'s favourite colour is ${faveColours[person]}.`)
};

sayFaveColour("August");
sayFaveColour("Haz");
