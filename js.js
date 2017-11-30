console.log("hello world");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the filter method to create a new array that contains planets with the letter 'e'

var filteredPlanets = planets.filter((planet) => {
    console.log("hey", planet, planet.indexOf("e"));
    // index of returns an index position-- if 0 it will read as falsy
    console.log("heyyyyy", planet, planet.includes("e"));
    // typeof is an operand not a method
    console.log("hehyyyyyyyeykajhkasjhcahd", typeof(planet))
    return planet.includes("e");
});


console.log("all E's", filteredPlanets); //["mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"]