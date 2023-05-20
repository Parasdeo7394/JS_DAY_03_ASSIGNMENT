// this is an arrow function
const loadcountryAPI = () =>{
    // fetch url of rest country frm website
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountries(data))
}

// displaying all countries
const displaycountries = countries =>{
    //   console.log(countries);
      const countriesHTML = countries.map(country => getcountry(country))
    //   displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
}

// get data and set it to html
const getcountry = (country) =>{
    console.log(country)
    return`
         <div class="country-div">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
         </div>
}
// call the function to get output in console
loadcountryAPI()