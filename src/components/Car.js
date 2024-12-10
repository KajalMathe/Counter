import React from "react";

class Car extends React.Component{
    constructor(){
        super();
        this.state = {color:"blue"};
    }

    render(){
        return(
            <>
            <h1>Car is {this.state.color}</h1>
            </>
        )
    }
}
export default Car;