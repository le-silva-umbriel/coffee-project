"use strict"
//fills in left side coffee options
let coffeeOptions = document.getElementById("left-side");
document.getElementById("submit").addEventListener("click", updateCoffees);
//right side input for "select coffee by roast"
let roastSelection = document.querySelector("#roast-selection");
//"change" activates the function for list of coffees
roastSelection.addEventListener("change", updateCoffees);
//right side, second option by coffee by name
let userinput = document.querySelector("#coffee-name");
//"add new coffee" inputs on second section
document.getElementById("coffee-name").addEventListener("input", updateCoffees2);
//defines last submit button
let lastSubmit = document.getElementById("submit2")
// last submit click activator
lastSubmit.addEventListener("click", updateCoffees3);
//second for placeholder defined
let userinput2 = document.querySelector("#coffee-name2");
//add new coffee option for the bonus
let roastSelection2 = document.querySelector("#roast-selection2");
//global scope value since the other defined variable within e.preventDefault
let selectedRoast = roastSelection.value;


//first coffee section by roast or name
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    selectedRoast = roastSelection.value;
    // console.log(selectedRoast);
    let str = '';

    // coffees.forEach(function (coffee) {
    //     if ( (coffee.roast === selectedRoast) || (selectedRoast === "all")){
    //         str += "<div class=\'col-6\'>" + coffee.name + " " + "<span class=\'text-muted\'>" + coffee.roast + "</span></div>";
    //
    //     }
    for(let i=0; i< coffees.length; i++){
        if ( (coffees[i].roast === selectedRoast) || (selectedRoast === "all")){
            str += "<div class=\'col-6\'>" + coffees[i].name + " " + "<span class=\'text-muted\'>" + coffees[i].roast + "</span></div>";
    }}
    ;
    coffeeOptions.innerHTML = str;
}
//coffee2 function
function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let inputs = userinput.value;

    console.log(inputs);
//defines function to differ the types of coffee roasts
    let str = '';
    coffees.forEach(function (coffee) {
        if (  (coffee.name.toLowerCase().includes(inputs.toLowerCase()) ) && ( (coffee.roast === selectedRoast) || (selectedRoast === "all"))          ) {
            str += "<div class=\'col-6\'>" + coffee.name + " " + "<span class=\'text-muted\'>" + coffee.roast + "</span></div>";
        }
    });
    coffeeOptions.innerHTML = str;
}
//updates coffee3 with new coffee option
function updateCoffees3(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let inputs = userinput2.value;
    let roasttype2 = roastSelection2.value;

    console.log(inputs);
//created new coffee object by taking the: id, name, and roast to create new object
    let newcoffee = {};
    newcoffee.id = coffees.length;
    newcoffee.name = inputs;
    newcoffee.roast = roasttype2;
    coffees.push(newcoffee);
//another loop created in order to display coffee by roast
    let str = '';
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(inputs.toLowerCase())) {
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