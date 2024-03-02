let cityName = "Techville"; 
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }
];

// Task 1: Change the name of "Riverside Park" to "Riverside Greenspace"
let riversidePark = parks.find(park => park.name === "Riverside Park");
if (riversidePark) {
    riversidePark.name = "Riverside Greenspace";
}

// Task 2: Change the name of the tree species "Maple" to "Sugar Maple" in "Central Park"
let centralPark = parks.find(park => park.name === "Central Park");
if (centralPark) {
    let mapleTree = centralPark.trees.find(tree => tree.species === "Maple");
    if (mapleTree) {
        mapleTree.species = "Sugar Maple";
    }
}

// Task 3: Add a new tree to "Central Park"
let newTree = {
    species: "Birch",
    age: 7,
    health: "Good",
    height: 18
};
parks.find(park => park.name === "Central Park").trees.push(newTree);

// Task 4: Retrieve a list of all tree species located in "Central Park"
let centralParkTrees = parks.find(park => park.name === "Central Park").trees.map(tree => tree.species);

// Task 5: Calculate the average age of all trees
let totalAge = parks.reduce((total, park) => total + park.trees.reduce((acc, tree) => acc + tree.age, 0), 0);
let totalTrees = parks.reduce((total, park) => total + park.trees.length, 0);
let averageTreeAge = totalAge / totalTrees;

// Task 6: Determine the tallest tree
let tallestTree = parks.reduce((maxHeightTree, park) => {
    return park.trees.reduce((maxHeightInPark, tree) => {
        return tree.height > maxHeightInPark.height ? tree : maxHeightInPark;
    }, maxHeightTree);
}, { height: 0 });

// Task 7: Remove "playground" facility from "Central Park"
let centralParkIndex = parks.findIndex(park => park.name === "Central Park");
if (centralParkIndex !== -1) {
    parks[centralParkIndex].facilities = parks[centralParkIndex].facilities.filter(facility => facility !== "playground");
}

// Task 8: Convert parks array to JSON
let parksJSON = JSON.stringify(parks);

// Task 9: Display name and facilities of the first park
let firstPark = parks[0];
let resultHTML = "<h2>Results:</h2>";
resultHTML += "<p>City Name: " + cityName + "</p>";
resultHTML += "<p>Park Count: " + parkCount + "</p>";

// Displaying each park
parks.forEach((park, index) => {
    resultHTML += "<h3>Park " + (index + 1) + ": " + park.name + "</h3>";
    resultHTML += "<p>Facilities: " + park.facilities.join(", ") + "</p>";
    resultHTML += "<p>Trees: </p>";
    park.trees.forEach(tree => {
        resultHTML += "<ul>";
        resultHTML += "<li>Species: " + tree.species + "</li>";
        resultHTML += "<li>Age: " + tree.age + "</li>";
        resultHTML += "<li>Health: " + tree.health + "</li>";
        resultHTML += "<li>Height: " + tree.height + "</li>";
        resultHTML += "</ul>";
    });
});

document.getElementById("results").innerHTML = resultHTML;
