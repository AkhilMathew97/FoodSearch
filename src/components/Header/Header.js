import React from 'react';
import "./Header.module.css"
import searchLogo from "./system-search.png"

function Header (){
    return(
        <header>
            <h1>
                <img src={searchLogo} alt="logo" />Food Search 
            </h1>
            
        </header>
    )
}
export default Header