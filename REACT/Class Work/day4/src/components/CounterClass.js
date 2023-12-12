import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
        super(props)

        this.state={
            count:0
        }
    }
    Increment=()=>{
        this.setState({count:this.state.count+1})      
    }
    Decrement=()=> {
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
            <button onClick={this.Increment}>Increment</button>
            <h2>Count:{this.state.count}</h2>
            <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }
    
}