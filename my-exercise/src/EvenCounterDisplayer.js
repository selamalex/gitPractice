import React, { Component } from 'react';
import './Button.css';

class EvenCounter extends Component{
   
    render(){
        return(
           <>
           <br/>
         
           {(this.props.value)%2==0 ? (
         <button className='EvenDisplayButton'> Clicked: {this.props.value} times</button>
      ) : (
        <button className='EvenDisplayButton'>Clicked: {Number(this.props.value)-1} times</button>
      )}
           
           </>
    )};
}
export default EvenCounter;