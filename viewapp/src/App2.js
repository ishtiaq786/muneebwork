import React, { Component } from 'react';
class App2 extends Component{
    
state={name: "" ,
fname: ""}


    whenChange = (event) => {
        const {name, value} = event.target
        this.setState ({[name] : value})
    }
    render(){
        return(
            <div>
            
            <input type = "text" 
            value={this.state.name} name= "name"
            onChange={this.whenChange}/>

            <input type = "text"
            value={this.state.fname} name ="fname"
            onChange = {this.whenChange}/>

            <p>{this.state.name}</p>
            <p>{this.state.fname}</p>

            </div>

           
            
        )
    
}
}


export default App2
