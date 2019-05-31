import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import 'bootstrap-social/bootstrap-social.css';


class Header extends Component{
    render () {
    return(

        
        <React.Fragment>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    
                    <div className="col-12 col-sm-6">
                        <h1 style={{fontFamily: 'Sans Serif', paddingLeft: '10%'}}>Annonser & mer annonser <img style={{height: '120px'}} src="https://cdn4.iconfinder.com/data/icons/shopping-in-color/64/shopping-in-color-05-512.png"></img> </h1>
                        
                    </div>
                    
                </div>
            </div>
        </Jumbotron>
        </React.Fragment>
    )
}}
export default Header;