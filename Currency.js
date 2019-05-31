import React, { Component } from 'react';
import axios from 'axios';
import Annonser from './Annonser'


class Currency extends Component {
    state ={
        valutor: ['USD', 'SEK','EUR', 'PLN'],
        tillValuta: 'EUR',
        antal:'',
        resultat:'',
        datum: '',
        basValuta:'SEK',
    }
    render(){
        const {
            valutor, tillValuta, antal, resultat, datum, basValuta
        } = this.state
        return (
            <div className="content">
                <h3 className="headertext">Konvertera valutan</h3>
            <div>
                <h4> {antal} {basValuta} är lika med: {resultat} {tillValuta}</h4>
                    <input  name="antal" value={antal} onChange={this.handleInput}
                    type="number" placeholder="Värde som ska konverteras..."></input>
                    <select style={{marginRight: '40px'}} name="basValuta" value={basValuta} onChange={this.handleSelect}>
                       <option key={basValuta} value={basValuta} >
                       {basValuta}
                       </option>
                       )}
                    </select>

                    <input value={resultat} placeholder="Konvertera till..." >
                    </input>
                    <select name="tillValuta" value={tillValuta } onChange={this.handleSelect}>
                       {valutor.map(valuta=>
                       <option key={valuta} value={valuta} >
                       {valuta}
                       </option>
                       )}
                    </select>
                <br></br>
            </div>
            </div>
        )
    }
    handleSelect = e => {
        this.setState({
            [e.target.name]: e.target.value
        },
        this.beräkna //Att lägga även beräkna metoden i handleSelect gör att nya beräkningar sker så fort en ny valuta "Selectas"
        )
    }
    handleInput = e=> {
        this.setState({
            antal: e.target.value 
        },
        this.beräkna // Beräkningen kommer genomföras direkt vid input, därav handleinput metoden
        )
    };
    beräkna = () => {
        const antal = this.state.antal;
        if (antal == isNaN) {
            return 
        }
        else
        {
            fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.basValuta}`).then(res => res.json())
            .then(data => {
                const resultat = (data.rates[this.state.tillValuta] * antal).toFixed(2);   
                this.setState({
                    resultat
                })

            })
            
        }
    }

}
export default Currency;
            

/*render(){
                return(
                    <div>
                        <h2>Valutor</h2>
                        {this.state.currency.map(specCurrency=> {
                            return(
                            <div className="content">
                               <p style={{color: 'RED'}}>Pris: {specCurrency.rates} </p>
        
                              
                                 </div>
                            )
                        })}
                    </div>
                    
                )
            } */