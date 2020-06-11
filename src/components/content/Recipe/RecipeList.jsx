import React, {useState,useEffect } from 'react';
import { Button, Card, CircularProgress , CardMedia, CardHeader, Avatar, CardContent, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, Typography, CardActions, Divider} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import styles from "./RecipeList.module.css"
import {ExpandMore, NavigateNext} from '@material-ui/icons';
import cx from "classnames"
import CountUp from "react-countup"

const RecipeList = ({data: {hits}, search, totalCount, pagination, setPagination}) =>{
    const [recipeDetails,setRecipeDetails] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        setRecipeDetails(hits)
    },[hits])
    
    const Expdetails = withStyles({
        details: {
            flexDirection: "column"
        }
    })
    const prevClick =() =>{
        if(pagination===0){
            return
        }
        setPagination(pagination-12)
        if (currentPage!==1){
            setCurrentPage(currentPage-1)
            
            window.scrollTo(0,0)
        }
    }
    const nextClick = () =>{
        if(pagination===totalCount){
            return
        }
        setPagination(pagination+12)
        if(currentPage!==totalPages){
            setCurrentPage(currentPage+1)
            
        }
    }
    
    const totalPages = Math.ceil(totalCount/12)
    return(
        recipeDetails
        ?(
            <div>
                <h2 className={cx(styles.back,styles.searchResult)} >
                    Found <CountUp start = {0}end = {totalCount}duration = {1}separator = ","/> results for "{search}"
                </h2>
                <div className={styles.container}>
                    {recipeDetails.map((details, i)=>(
                        <Card spacing={3} justify="center" className={styles.card} key={i}>
                            <CardHeader 
                                avatar ={
                                    <Avatar aria-label="recipe" className={styles.avatar}>
                                        R
                                    </Avatar>
                                }
                                title={details.recipe.label}
                                subheader= {details.recipe.source}
                            />
                            
                            <CardMedia 
                                className={styles.media}
                                image={details.recipe.image}
                                title={details.recipe.label}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textPrimary" component="span">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                        Ingredients
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <expdetails>
                                            {details.recipe.ingredientLines.map((lines,id)=>{
                                                return(
                                                    <ul key={id}>
                                                        <li>{lines}</li> 
                                                    </ul>
                                                
                                                )
                                            })}
                                        </expdetails>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                </Typography>
                                <Divider />
                                <Typography variant="caption" color="textSecondary" >
                                    Calories: {Math.round(details.recipe.calories)}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button 
                                    className="btnLink" 
                                    href={details.recipe.url}
                                    target="_blank"
                                    color="primary"
                                    variant="text"
                                    endIcon={<NavigateNext />}
                                >Instructions</Button>
                            </CardActions>
                        </Card>
                    ))}
            </div>
            <div className={styles.toolPlate}>
                <a onClick={prevClick} className={styles.prevBtn}><i className="fas fa-chevron-left"></i></a>
                    <span className={styles.pgInfo}>Page {currentPage} of {totalPages} {totalPages>1 ? "pages": "pages"}</span>
                <a onClick={nextClick} className={styles.nextBtn}><i className="fas fa-chevron-right"></i></a>   
                                    {/*<button  className={styles.slideUp}><i class="fas fa-arrow-up"></i></button>    */ }                               
            </div>
            </div>
            
        ):<CircularProgress className={styles.progress} size={70} color="secondary"/>
    )
}
export default RecipeList