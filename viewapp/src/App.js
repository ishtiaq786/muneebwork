import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App2 extends Component {

    state  = {
        text: this.props.num
    }
    static getDerivedStateFromProps(props){
        return({
            text: props.num

        })
            
        

    }
    render(){
        return(
            <div>
            <h1>2nd Component</h1>
            <h1>The state number is {this.state.text}</h1>
            </div>

        )
    }

}




class App extends Component {
    state = {
        number: 0
    }
    componentWillUnmount(){
        console.log("bye bye")
    }
    
    
    componentDidMount(){

        setInterval(() => {
            this.setState(()=>({
                number : Math.ceil(Math.random() * 1000)
            }))
           // ReactDOM.render(<App2 />, document.getElementById('root'));

        }, 5000);
            
    }


    render(){
        console.log(this.state.number)


        return(
            <div>
            <h1>The state number is {this.state.number} </h1>
            <App2 num={this.state.number}/>

            </div>
            
        );
    }
}

                
     export default App
                
        
                
            
                   
        
    
    
                



