const pokemon = require("./data.js")

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

// Uncomment the line below to see full pokemon array from data.js - includes pokedex number, name, type, hp, and whether it is a starter or not (bool)
// console.dir(pokemon, { maxArrayLength: null });

//Uncomment the line below to see game data array - inlcudes party array (entries from pokemon array in data.js), gyms array (includes location, completion (bool) and difficulty rating), and items array (includes name and quantity in bag)
// console.log(game);
