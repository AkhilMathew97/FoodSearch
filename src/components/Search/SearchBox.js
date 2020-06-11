import React,{useState, useEffect} from 'react';
import { FormControl, TextField, Button, makeStyles } from '@material-ui/core';
import styles from "./SearchBox.module.css"
import SearchIcon from "@material-ui/icons/Search"

const  SearchBox = ({handleChange}, cat)=>{
    const [category, setCategory] = useState("")
    const [query, setQuery] = useState("")

    useEffect(()=>{
        setCategory(cat)
    },[cat])

    const btnStyles = makeStyles((theme) => ({
        button : {
            margin: theme.spacing(1),
        }
    }))

    const classes= btnStyles()

    const handleClick =() =>{
        var term = query
        handleChange(term)
    }
    return(
        
        <div>
            <FormControl className={styles.formcontrol}  >
                <TextField 
                    type="search" 
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)} 
                    className={classes.textfield} 
                    variant="outlined" 
                    label="Search..." 
                />
                <Button 
                    variant="contained" 
                    onClick={handleClick}
                    className={classes.button} 
                    color="primary" 
                    startIcon={<SearchIcon/>}
                >Search</Button>
            </FormControl>
            
        </div>
    )
}

export default SearchBox