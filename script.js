// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
let riversidePark = parks.find(park => park.name === "Riverside Park");
if (riversidePark) {
    riversidePark.name = "Riverside Greenspace";
}

// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
let centralPark = parks.find(park => park.name === "Central Park");
if (centralPark) {
    let mapleTree = centralPark.trees.find(tree => tree.species === "Maple");
    if (mapleTree) {
        mapleTree.species = "Sugar Maple";
    }
}

// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
let newTree = {
    species: "Birch",
    age: 7,
    health: "Good",
    height: 18
};
parks.find(park => park.name === "Central Park").trees.push(newTree);

// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
let centralParkTrees = parks.find(park => park.name === "Central Park").trees.map(tree => tree.species);


// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
let totalAge = parks.reduce((total, park) => total + park.trees.reduce((acc, tree) => acc + tree.age, 0), 0);
let totalTrees = parks.reduce((total, park) => total + park.trees.length, 0);
let averageTreeAge = totalAge / totalTrees;

// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
let tallestTree = parks.reduce((maxHeightTree, park) => {
    return park.trees.reduce((maxHeightInPark, tree) => {
        return tree.height > maxHeightInPark.height ? tree : maxHeightInPark;
    }, maxHeightTree);
}, { height: 0 });

// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
let centralParkIndex = parks.findIndex(park => park.name === "Central Park");
if (centralParkIndex !== -1) {
    parks[centralParkIndex].facilities = parks[centralParkIndex].facilities.filter(facility => facility !== "playground");
}

// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
let parksJSON = JSON.stringify(parks);

// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
let firstPark = parks[0];
let resultHTML = "<h2>Results:</h2>";
resultHTML += "<p>City Name: " + cityName + "</p>";
resultHTML += "<p>Park Count: " + parkCount + "</p>";
console.log("Display name of first item parks array:", parks[0].name);
console.log("Facilities of the first park:", parks[0].facilities.join(", "));

// Task 10: Using console.log, display the species of the third item in the parks array
console.log("Display species of third item parks array:", parks[2].trees[0].species);
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

// Display average tree age
resultHTML += "<p>Average Tree Age: " + averageTreeAge.toFixed(2) + "</p>";

// Display details about the tallest tree
resultHTML += "<p>Tallest Tree:</p>";
resultHTML += "<ul>";
resultHTML += "<li>Species: " + tallestTree.species + "</li>";
resultHTML += "<li>Age: " + tallestTree.age + "</li>";
resultHTML += "<li>Health: " + tallestTree.health + "</li>";
resultHTML += "<li>Height: " + tallestTree.height + "</li>";
resultHTML += "</ul>";


document.getElementById("results").innerHTML = resultHTML;
