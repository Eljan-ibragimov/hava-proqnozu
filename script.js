const url = 'https://api.openweathermap.org/data/2.5/'
const key = '8fbaae7c8525ec41a1f9e6fe34e48710'
const searchBar = document.getElementById('searchBar')

const setQuery = (e) =>{
    if(e.keyCode == '13')

    getResult(searchBar.value)
    

}



function getResult(cityName){
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
  fetch(query)
  .then(weather =>{

    if(!weather.ok) 
  
    throw new Error("Bölgəni düzgün daxil edin")
    return weather.json()
    
  })
.then(displayResult)
.catch(err=>renderError(err))

}

// const getResult = (cityName) =>{
//     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
//     fetch(query)
//     .then(weather =>{

//       if(!weather.ok) 
    
//       throw new Error("Bölgəni düzgün daxil edin")
//       return weather.json()
      
//     })
//   .then(displayResult)
//   .catch(err=>renderError(err))

// }
// const displayResult = (result) =>{
//     // console.log(result)
//   let city = document.querySelector('.city')
//   city.innerText = `${result.name},${result.sys.country}`

//   let temp = document.querySelector('.temp')
//   temp.innerText = `${Math.round(result.main.temp)}C°`

//   let desc = document.querySelector('.desc')
//   desc.innerText =`${result.weather[0].description}
//   Küləyin sürəti:${Math.round(result.wind.speed)}m/san`

//   let minmax = document.querySelector('.minmax')
//   minmax.innerText = `${Math.round(result.main.temp_min)}C°/ ${Math.round(result.main.temp_max)}C°`
// }


function displayResult (result){
  console.log(result)
let city = document.querySelector('.city')
city.innerText = `${result.name},${result.sys.country}`

let temp = document.querySelector('.temp')
temp.innerText = `${Math.round(result.main.temp)}C°`

let desc = document.querySelector('.desc')
desc.innerText =`${result.weather[0].description}
Küləyin sürəti:${Math.round(result.wind.speed)}m/san`

let minmax = document.querySelector('.minmax')
minmax.innerText = `${Math.round(result.main.temp_min)}C°/ ${Math.round(result.main.temp_max)}C°`
}




function renderError(err){
  const html = `
  <div class = "alert">
  ${err.message}
  </div>`;
  setTimeout(function(){
    document.querySelector("#error").innerHTML = " ";
  },3000)
  document.querySelector("#error").innerHTML = html;

}
searchBar.addEventListener('keypress',setQuery)

document.addEventListener('DOMContentLoaded', loaded)
 function loaded(){
  let query = `${url}weather?q=Bakı&appid=${key}&units=metric&lang=az`
  fetch(query)
  .then(weather =>{

    if(!weather.ok) 
  
    throw new Error("Bölgəni düzgün daxil edin")
    return weather.json()
    
  })
.then(displayResult)
  
 }