import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Currency from './Currency';
import Form from './Form'
import Whether from './Whether'

class Annonser extends Component {
    

    state ={
        service: [],
        price: '',
        valutor: ['USD', 'SEK','EUR', 'PLN'],
        tillValuta: 'EUR',
        antal:'',
        resultat:'',
        datum: '',
        basValuta:'SEK', 
        showMe: false,       

    }
    
    componentDidMount () {
        console.log(this.props)
        axios.get('http://193.10.202.78/AnnonsRestApi/api/service').then(res=>
        this.setState({service:res.data
        }
        ))
    }
    
    operation()
    {
        this.setState({
            showMe: !this.state.showMe
        })
    }
    

    render(){
        const {
            valutor, tillValuta, antal, resultat, datum, basValuta
        } = this.state
        return(
                
          <div className="w3-row-padding w3-grayscale">
              <br></br>
              
              {
                  this.state.showMe?
              
              <div>
                  <Currency />
              </div>
              :null
              }
              <br></br>
              <button className="hideBtnStyle" onClick={()=>this.operation()}>Öppna konverterare</button>

              <h2 className="headertext">Tillgängliga Annonser</h2>
                {this.state.service.map(specService=> {
                    return(
                        <div className="w3-col w3-col-specialWidth marginBetween ">
                            <div key={specService.Title} className="innehåll" >
                                <div className="w3-light-grey">
                                                
                                            
                                        <div style={{height: '650px'}} className="innehåll">
                                            <img style={{height: '350px', width: '350px', paddingTop: '20px'}}   src={specService.Picture}></img>
                                            <h3 style={{color: 'green'}}>{specService.Title} <span style={{color: 'RED'}}>  {specService.Price} KR</span></h3>

                                            <p><strong>Kategori: </strong> {specService.SubCategory.Titel}</p> 


                                            <p style={{fontSize: '15px', maxLines: '1'}}><strong>Beskrivning: </strong> {specService.Description  }</p> 
                                            <p><strong>Skapad: </strong> {specService.CreatedTime}</p> 
                                            <p><strong>Avslutas: </strong> {specService.EndDate}</p> 
                                            


                                        </div>
                                                
                                    </div>
                            
                            <br></br>

                        </div>
                </div>

                        )
                                
                    })}
            </div>
            
        )
    }
}
export default Annonser;







 {/*
    Inspiration till döljknappen kommer från https://www.youtube.com/watch?v=sfp5K_5GHNg


                            <div className="w3-col w3-col-specialWidth marginBetween">
                                <div className="w3-light-grey">
                                    <div className="innehåll">
                                    <h3>{specService.Title}</h3>
                                    <img src={specService.Picture}></img>

                                        <p style={{color: 'RED'}}>Pris: {specService.Price} <button onClick={this.handleClick}> Omvandla till EURO</button> </p>

                                        <p>Titel: {specService.SubCategory.Titel}</p> 
                                        <p>Undertitel: {specService.SubCategory.ParentCategory.Titel}</p> 

                                        <p>Också Undertitel: {specService.Title}</p> 

                                        <p>Beskrivning: {specService.Description  }</p> 
                                        <p>Skapad: {specService.CreatedTime}</p> 
                                        <p>Går ut: {specService.EndDate}</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="w3-col w3-col-specialWidth marginBetween">
                                <div className="w3-light-grey">
                                    <div className="innehåll">
                                    <h3>{specService.Title}</h3>
                                        <img src={specService.Picture}></img>
                                        <p style={{color: 'RED'}}>Pris: {specService.Price} <button onClick={this.handleClick}> Omvandla till EURO</button> </p>

                                        <p>Titel: {specService.SubCategory.Titel}</p> 
                                        <p>Undertitel: {specService.SubCategory.ParentCategory.Titel}</p> 

                                        <p>Också Undertitel: {specService.Title}</p> 

                                        <p>Beskrivning: {specService.Description  }</p> 
                                        <p>Skapad: {specService.CreatedTime}</p> 
                                        <p>Går ut: {specService.EndDate}</p> 
                                    </div>
                                </div>
                            </div>


                             <Form getweather={this.getweather}/>
                                            <Whether temperature={this.state.temperature}/>

 getweather = async (e)=>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
        if(city && country)
        {this.setState({
            temperature: 'hot as F'
                        */}