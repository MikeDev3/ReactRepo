import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap-social/bootstrap-social.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Annonser from './Annonser';
import Currency from './Currency';
import Paintings from './Paintings';
import TestPost from './PostPainting';
import PostPainting from './PostPainting';
const Apikey="b529bdff14d820b67328bf87bea87b4f";

class App extends Component {
 
    state={
  
      name: 'Big Boy',
  
      Player: [
        {Id:1, name:'Big Mike'},
        {Id:2, name:'Big Benny'},
        {Id:3, name:'Big Conny'},
        {Id:4, name:'Big Ponny'}
  
      ]
    }
  
    handleClick=()=> {console.log("Du tryckte pÃ¥ knappen")}
    handleMouseOver =()=> {console.log("Du rÃ¶rde musen Ã¶ver knappen")}
  
    Change=()=> {this.setState({
      name:'Small Mike'
    })}
  
    render() {
    return (
      <BrowserRouter>

      <Header/>
      <div className="App">
      <Nav />
      <Route exact path="/Home" component ={Home}/>
      <Route path="/About" component={About} />
      <Route path="/Annonser" component={Annonser}/>
      <Route path="/Currency" component={Currency}/>
      <Route path="/Paintings" component={Paintings}/>
      <Route path ="/PostPainting" component={PostPainting}/>
     
      {/*
      <button onClick={this.handleClick}>Klicka pÃ¥ mig</button>
      <br></br> <br></br>
      <button onMouseOver={this.handleMouseOver}>Dra Ã¶ver mig</button>
  
      <p>{this.state.name}</p>
    <button onClick={this.Change}>Tryck pÃ¥ mig!</button> */}
    
  
  
  
  
      </div>
      <br></br>
      <Footer  />
      </BrowserRouter>
    );
  }
  }
  
  export default App;
  