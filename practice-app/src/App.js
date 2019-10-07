import React, { Component } from "react";
import Practice from './Practice'

var MyObj = new Practice("irfan").render;
console.log(MyObj);


class App extends Component {

    render() {
        return (
            <div>
                <MyObj />
            </div>


        );
    }
}

export default App;






