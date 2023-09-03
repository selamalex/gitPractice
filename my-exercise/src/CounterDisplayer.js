import React, { Component } from 'react';
import './Button.css';

class Counter extends Component{
    render(){
        return(
           <>
           <br/>
           <button className='DisplayButton'>Count: {this.props.value}</button>
           
           </>
    )};
}
export default Counter;