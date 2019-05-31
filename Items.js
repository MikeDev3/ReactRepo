import React, {Component} from 'react'

class Items extends React.Component {
render() {
const {test}=this.props;
const myPlayers = test.map (vilketnamnsomhelst => {
    if (vilketnamnsomhelst.Id >= 3){
    return (
        <div key={vilketnamnsomhelst.name}>
            <p>{vilketnamnsomhelst.name}</p>
        </div>
    )}
    else {
        return (
            <div>
                Bara ID över 1
            </div>
        )
        }})
return (
    <div>
        Mina spelare
        {myPlayers}
    </div>
)}}
export default Items;