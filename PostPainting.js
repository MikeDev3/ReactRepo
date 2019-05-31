import React, { Component } from 'react';
import axios from 'axios';

class PostPainting extends Component {
    constructor(props) {
        super(props)
            this.state ={
                name: '',
                beskrivning: '',
                pris: '',
                plats: '',
                bild:'',
            }
    }
    changeHandler= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(`http://193.10.202.76/PaintingsAPI/api/Paintings`, this.state)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
        

    }
    render() {
        const { name, beskrivning, pris, plats, bild} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <h3>Lägg till nytt verk</h3>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Namn på målning.."></input>
                        </div>
                        <div>
                        <input type="text" name="beskrivning" value={beskrivning} onChange={this.changeHandler} placeholder="Beskrivning av målning.."></input>
                        </div>
                        <div>
                        <input type="text" name="pris" value={pris} onChange={this.changeHandler} placeholder="Pris.."></input>
                        </div>
                        <div>
                        <input type="text" name="plats" value={plats} onChange={this.changeHandler} placeholder="Målningens position idag.."></input>
                        </div>
                        <div>
                        <input type="text" name="bild" value={bild} onChange={this.changeHandler} placeholder="Länka in bild.."></input>
                        </div>
                        <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
} export default PostPainting