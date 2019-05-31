import React, { Component } from 'react';
import axios from 'axios';
import PostPainting from './PostPainting';

class Paintings extends Component {
  state = {
    paintings: [],
   
  }
  componentDidMount() {
    axios.get(`http://193.10.202.76/PaintingsAPI/api/Paintings`)
      .then(res => {
        const paintings = res.data;
        this.setState({ paintings });
      })
  }

  render() {
    return (
        <div className="w3-row-padding w3-grayscale">
        <br></br>
        <h2 className="headertext">Kända historiska verk</h2>
          {this.state.paintings.map(painting => {
              return(
                  <div className="w3-col w3-col-specialWidth marginBetween ">
                      <div key={painting.id}  className="innehåll" >
                          <div className="w3-light-grey">                               
                                  <div style={{height: '650px'}} className="innehåll">
                                      <img alt="Målning över verket" style={{height: '350px', width: '360px', paddingTop: '20px'}}   src={painting.Bild}></img>
        
                                    <p><strong>Namn:</strong> {painting.Namn}</p>
                                    <p ><strong>Beskrivning:</strong> {painting.Beskrivning}</p>
                                    <p ><strong>Plats:</strong> {painting.Plats}</p>
                                    <p><strong>Pris:</strong> {painting.Pris} SEK</p>
                                    <p ><strong>ID </strong>{painting.ID}</p>

                               
                                  </div>        
                              </div>                 
                      <br></br>

                  </div>
          </div>

                  )
                          
              })}           

              <PostPainting/>
      </div>
      
    )
  }
}
export default Paintings;