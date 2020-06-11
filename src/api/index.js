import axios from "axios"


export const fetchRecipe = async (term, pagination) =>{
    const url = "https://api.edamam.com/search"
    const APP_ID = "a56186ad"
    const APP_KEY = "446b7322ce7b5a1757e64665bfaca487"
    const searchterm = term.q
    try {
        var {data:{count, q, hits}} = await axios.get(`${url}?q=${searchterm}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${pagination}&to=${pagination+12}`)
        return {count, q, hits}
    } catch (error) {
        console.log(error)
    }
}