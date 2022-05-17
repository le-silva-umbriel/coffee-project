"use strict"
//fills in left side coffee options
let coffeeOptions = document.getElementById("left-side");
document.getElementById("submit").addEventListener("click", updateCoffees);
//right side input for "select coffee by roast"
let roastSelection = document.querySelector("#roast-selection");
//right side, second option by coffee by name
let userinput = document.querySelector("#coffee-name");
//
document.getElementById("coffee-name").addEventListener("input", updateCoffees2);

let lastSubmit = document.getElementById("submit2")
// associated last submit button
lastSubmit.addEventListener("click", updateCoffees3);
let userinput2 = document.querySelector("#coffee-name2");
let roastSelection2 = document.querySelector("#roast-selection2");

//updates coffee3
function updateCoffees3(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let inputs = userinput2.value;
    let roasttype2 = roastSelection2.value;

    console.log(inputs);
    let newcoffee = {};
    newcoffee.id = coffees.length;
    newcoffee.name = inputs;
    newcoffee.roast = roasttype2;
    coffees.push(newcoffee);

    let str = '';
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(inputs.toLowerCase())) {
            str += "<div class=\'col-6\'>" + coffee.name + " " + "<span class=\'text-muted\'>" + coffee.roast + "</span></div>";
        }
    });
    coffeeOptions.innerHTML = str;

}
function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let inputs = userinput.value;

    console.log(inputs);

    let str = '';
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(inputs.toLowerCase())) {
            str += "<div class=\'col-6\'>" + coffee.name + " " + "<span class=\'text-muted\'>" + coffee.roast + "</span></div>";
        }
    });
    coffeeOptions.innerHTML = str;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    // console.log(selectedRoast);
    let str = '';
    coffees.forEach(function (coffee) {
        if ((coffee.roast === selectedRoast) || (selectedRoast === "all")){
            str += "<div class=\'col-6\'>" + coffee.name + " " + "<span class=\'text-muted\'>" + coffee.roast + "</span></div>";

        }
    });
    coffeeOptions.innerHTML = str;
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
//