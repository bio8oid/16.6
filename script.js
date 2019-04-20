'use strict';
(function(){ 


var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName + '?fullText=true')
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}


function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item){
    var liEl = document.createElement('li');
    var img = document.createElement('img');
    liEl.innerText = item.name + ' (capital: ' + item.capital + ' )' ;
    countriesList.appendChild(liEl);
    countriesList.appendChild(img);
    flag();


    function flag() {
      var flag = document.getElementsByTagName("img")[0];
      var src = document.createAttribute("src");
      src.value = item.flag;
      flag.setAttributeNode(src);
    }
    });
}





document.getElementById('search').addEventListener('click', searchCountries);


})(); 


// + '<img src="' + item.flag + '" alt="' + countryName + '">'