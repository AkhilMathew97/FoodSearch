import React, {Component} from 'react';
import {SearchBox, Header, List} from "./components"
import styles from "./App.module.css"

import { Card, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, CardContent, Grid } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class App extends Component {
    state={
        term: ""
    }
    handleChange = (query) => {
       this.setState({term:query})
    }
    render() {
        
        
        return(
            <div className={styles.bgs}>

                <div  ></div>
                <div className={styles.content}>
                    <div className={styles.load}></div>
                <Header />
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={styles.categorybox}>
                        <CardContent>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    Recipe Category
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                   <SearchBox cat="Recipe" handleChange ={this.handleChange}/>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    Food Category
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <p>Coming Soon!</p>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    Nutriton Analysis Category
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <p>Coming Soon!</p>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </CardContent>
                    </Grid>
                </Grid>
                <div>
                    {this.state.term === "" ? "" : <List  q={this.state.term} /> }
                </div>
                </div>
            </div>
        )
    }
}

export default App