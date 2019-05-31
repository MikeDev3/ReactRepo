import React, {Component} from 'react';
import axios from 'axios'; 

class Blog extends Component {

    state={
        users:[]
    }
    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/users").then(res=> {
            this.setState({
                users:res.data
            })
        })
    }

    render(){
        return(
            <div>
                <h1>BLOG</h1>
                <div>
                    {this.state.users.map(user=><div>Username = {user.username} </div>)} <br></br>
                    {this.state.users.map(user=><div>Real name = {user.name} </div>)}

                </div>
            </div>
        )
    }
}
export default Blog;