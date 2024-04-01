const searchBtn = document.querySelector(".searchBtn")
const searchform = document.querySelector(".searchform")
const inputField = document.querySelector(".inputField")
const formSearch = document.querySelector(".search-btn")
const recipeContainer = document.querySelector(".recipeContainer")




const getRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json()
    // console.log(response)
    console.log(response.meals)
    recipeContainer.innerHTML = ""

    for (let meals of response.meals) {
        // console.log(meals, "melas")
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

        const showBtn = newRecipe.querySelector(".viewRecipe")
        showBtn.addEventListener("click", () => {
            openPopup(meals)
        })
    }

}
const openPopup = (meals) => {

    const popMenu = document.createElement("div")
    popMenu.classList.add("popup")
    console.log(popMenu)

    popMenu.innerHTML = `<i class="fa-solid fa-x"></i>
    <p class="instructions">${meals.strInstructions}</p>
    `
    recipeContainer.appendChild(popMenu)
    const popupContainer = document.querySelector(".popup")
    const closeBtn = popupContainer.querySelector("i")
    console.log(closeBtn)

    closeBtn.addEventListener("click", () => {
        popupContainer.style.dispay = "none"
        console.log("logged")
    })
}


formSearch.addEventListener("click", () => {
    const userSearch = inputField.value.trim()
    getRecipes(userSearch)


})


searchBtn.addEventListener("click", () => {
    searchform.classList.toggle("active")
    console.log("log")
})
