import React, { Component } from 'react';
import './Button.css';
import Counter from './CounterDisplayer';
import EvenCounter from './EvenCounterDisplayer';


class Count extends Component{
    constructor(props){
        super(props);
        this.state={
            value:0,
        };
    }

    increment = () => {
        this.setState((state)=>{
            return{
                value: state.value+1,
            };
        });
    };

    render(){
        return(
            <div>
                 <h2>Question number 1 and 2</h2>
            <button className='Button1' onClick={this.increment}>Click here</button>
            <Counter value={this.state.value}/>
            <EvenCounter value={this.state.value}/>
            </div>
            
        );
    } 

}
export default Count;