'use strict';
(function(){ 


const url = 'https://restcountries.eu/rest/v2/name/';
const countriesList = document.getElementById('countries');

function searchCountries(event) {
    event.preventDefault();
    let countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item){
    const listElement = document.createElement('li');
    const img = document.createElement('img');
    listElement.innerText = item.name + " (capital: " + item.capital + " )" ;
    countriesList.appendChild(listElement);
    const src = document.createAttribute("src");
    src.value = item.flag;
    listElement.appendChild(img).setAttributeNode(src);
    });
}

// document.getElementById('search').addEventListener('click', searchCountries);

document.getElementById('search').addEventListener('click', searchCountries);
})(); 
