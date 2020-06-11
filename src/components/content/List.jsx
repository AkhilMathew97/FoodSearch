import React, { useState, useEffect } from 'react';
import {fetchRecipe} from "../../api"
import RecipeList from "./Recipe/RecipeList"
import { Divider, StylesProvider } from '@material-ui/core';
import thinker from './noResults-thinking.png'

import styles from "./List.module.css"

const List=(query)=>{
    const [recipeData, setRecipeData] = useState([])
    const [pagination, setPagination] = useState(0)
    useEffect(()=>{
        const fetchRecipes =async() =>{
            setRecipeData(await fetchRecipe(query,pagination))
        }
        fetchRecipes()
    },[query,pagination])
    console.log(recipeData)
    const totalCount = recipeData.count
    const search = recipeData.q
    return(
        recipeData.count!==0
        ?(
            <div className="results">
                <Divider />
                <div>
                    <RecipeList 
                        data={recipeData} 
                        totalCount={totalCount} 
                        search={search} 
                        pagination={pagination}
                        setPagination={setPagination}
                    />
                </div>
            </div>
        ):(
            <div className={styles.noResults}>
                <img className={styles.thinker} src={thinker} ></img>
                <h1 className={styles.noResultText}> Oops...Seems Like You Entered Something That Doesnt Make Sense</h1>
            </div>
        )
    )
}

export default List