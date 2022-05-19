"use strict";


let favIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-kiss" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.493 13.368a7 7 0 1 1 2.489-4.858c.344.033.68.147.975.328a8 8 0 1 0-2.654 5.152 8.58 8.58 0 0 1-.81-.622Zm-3.731-3.22a13 13 0 0 0-1.107.318.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.892 1.892 0 0 1-.31.593c-.077.107-.168.22-.275.343.107.124.199.24.276.347.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a14.87 14.87 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321.176.041.325.069.446.084a5.609 5.609 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.52 5.52 0 0 0 .5-.577 4.465 4.465 0 0 0-.448.082Zm.766-.087-.003-.001-.003-.001c.004 0 .006.002.006.002Zm.002 1.867-.006.001a.038.038 0 0 1 .006-.002ZM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm2.757-.563a.5.5 0 0 0 .68-.194.934.934 0 0 1 .813-.493c.339 0 .645.19.813.493a.5.5 0 0 0 .874-.486A1.934 1.934 0 0 0 10.25 5.75c-.73 0-1.356.412-1.687 1.007a.5.5 0 0 0 .194.68ZM14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"/>
</svg>`;
function renderCoffee(coffee) {
    let html = '<div class="col-6">';
    html += `<div class="card text-bg-primary mb-3  w3-animate-zoom anime" style="max-width: 18rem;">`;
    html += `<div class="card-header">${coffee.name} <span class="card-text text-muted"> ${coffee.roast} </span> <span class="float-end">${repeatIcon(favIcon, randomNumber(6))}</span> </div>`;
    html += `<div class="card-body">`;
    html += `<p class="card-text"> ${adjArr[randomNumber(adjArr.length)]}. ${adjArr[randomNumber(adjArr.length)]}. ${adjArr[randomNumber(adjArr.length)]}.   </p>`;
    html += '</div>';//card body
    html += '</div>';//card end
    html += '</div>';//final container
    return html;
}

function repeatIcon(iconString, howMany){
    let html = '';
    for(let i = 0; i< howMany; i++){
        html += favIcon;
    }
    return html;
}

function renderCoffees(coffees, roastTypes) {
    let html = '';
    if(roastTypes === 'all'){
        for(let i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || (selectedRoast == 'all')) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees, 'all');
}

function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = inputValue.value;
    var selectedRoast2 = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (      (coffee.name.toLowerCase().includes(selectedRoast.toLowerCase())) && (coffee.roast === selectedRoast2 || (selectedRoast2 == 'all'))     ) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees, 'all');
}

function updateCoffees3(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedName = document.getElementById("coffee-name2").value;
    var selectedRoast = document.getElementById("roast-selection2").value;
    coffees.push({id:coffees.length, name:selectedName, roast:selectedRoast});

    tbody.innerHTML = renderCoffees(coffees, 'all');
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

let adjString = "Flowery. Fruity. Herby. Nutty. Caramelly. Chocolaty. Resinous. Spicy. Carbony. Earthy. Groundy. Dirty. Musty. Mouldy. Baggy. Tipped. Scorched. Baked. Sweaty. Hidy. Horsey";
let adjArr = adjString.split(". ");
console.log(randomNumber(adjArr.length));
function randomNumber(sizeArr){
    return Math.floor(Math.random() * (sizeArr));
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener("change", updateCoffees);
let inputValue = document.querySelector('#coffee-name');
inputValue.addEventListener('input', updateCoffees2)

tbody.innerHTML = renderCoffees(coffees, 'all');
submitButton.addEventListener('click', updateCoffees);

var submitButton2 = document.querySelector('#submit2');
submitButton2.addEventListener('click', updateCoffees3);