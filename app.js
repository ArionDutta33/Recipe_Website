const searchBtn = document.querySelector(".searchBtn")
const searchform = document.querySelector(".searchform")
const inputField = document.querySelector(".inputField")
const formSearch = document.querySelector(".search-btn")
const recipeContainer = document.querySelector(".recipeContainer")




const getRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json()
    console.log(response)
    console.log(response.meals)
    recipeContainer.innerHTML = ""

    for (let meals of response.meals) {
        const newRecipe = document.createElement("div")
        newRecipe.innerHTML = `
        <div class="img-box">
        <img src="${meals.strMealThumb}"}>
        </div>
        <p class="source"> <span class="origin">Country</span>: ${meals.strArea}  </p>
        <p class="category"> <span class="category-span">Category</span>: ${meals.strCategory}  </p>
        <button class="viewRecipe">View Recipe</button>
        `
        newRecipe.classList.add("recipe-box")
        recipeContainer.appendChild(newRecipe)
    }

}


formSearch.addEventListener("click", () => {
    const userSearch = inputField.value.trim()
    getRecipes(userSearch)


})


searchBtn.addEventListener("click", () => {
    searchform.classList.toggle("active")
    console.log("log")
})
