const searchForm = document.querySelector(".sea");
const caloriForm = document.querySelector(".cal");
const dietForm = document.querySelector(".diet");
const searchResultDiv = document.querySelector(".searchresults");
const container = document.querySelector(".SearchTextbox");
let searchQuery = "";
let searchQuery2 = "";
let searchQuery3 = "";
const APP_ID = "9c518e95";
const APP_KEY = "7993f942893b547676d43ed1b92f1ccd";








searchForm.addEventListener('submit',(e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery)
    fetchAPI();
    


})

caloriForm.addEventListener('submit',(e) => {
  e.preventDefault();
  searchQuery2 = e.target.querySelector('input').value;
  console.log(searchQuery2)
  fetchAPI();
  

})

dietForm.addEventListener('submit',(e) => {
  e.preventDefault();
  searchQuery3 = e.target.querySelector('input').value;
  console.log(searchQuery3)
  fetchAPI();
  

})







async function fetchAPI (){

 
    const response1= await fetch(`https://api.edamam.com/search?q=${searchQuery}& app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9&calories=${searchQuery2}&diet=${searchQuery3}`);
    const response3 = await fetch(`https://api.edamam.com/search?q=${searchQuery}& app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9&diet=${searchQuery3}`);
    const response2= await fetch(`https://api.edamam.com/search?q=${searchQuery}& app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9&calories=${searchQuery2}`);
    const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}& app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`);


    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);

    const data3 = await response3.json();
    generateHTML(data3.hits);
    console.log(data3);

     
    const data2 = await response2.json();
    generateHTML(data2.hits);
    console.log(data2);
     
   


    const data1 = await response1.json();
    generateHTML(data1.hits);
    console.log(data1);


}

function generateHTML(results){
    let generatedHTML = ''
    //let generatedHTML2 = ''
    results.map(result => {
        generatedHTML += `
      <script src = "cart.js" async ></script> 
      <div class="item">
        <img src ="${result.recipe.image}" alt="">   
        <div class="check-recipe">
          <h1 class="item-title">${result.recipe.label}</h1>
          <a class="viewclick" href = "${result.recipe.url}"> View Recipe</a>
          <button class="addbutton" type = "button"> Add Calories</button>
          

        </div>
        <p class= "item-data"> Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class= "item-data"> Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels: 'No Data Found'}</p>
        <p class= "item-data"> Health Label: ${result.recipe.healthLabels}</p>
        </div>
    `



    
  })
    searchResultDiv.innerHTML = generatedHTML;
}









