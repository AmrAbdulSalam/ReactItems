
import './App.css';
import React , { Component } from 'react';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowRepeat  } from "react-icons/bs";
import { AiOutlinePlusCircle ,AiOutlineMinusCircle } from "react-icons/ai";
class App extends Component{

  state = {
    counter : [
      {id : 1 , num : 0} ,
      {id : 2 , num : 0} ,
      {id : 3 , num : 0} ,
      {id : 4 , num : 0} 
    ],
    items : [0 , 0 , 0 ,0],

  }

  goClear = () =>{
    let counter = [
      {id : 1 , num : 0} ,
      {id : 2 , num : 0} ,
      {id : 3 , num : 0} ,
      {id : 4 , num : 0}
    ]
    this.setState({
      counter
    })
  }

  inc = (id) => {
    
      const counter = [...this.state.counter]
      const items = [...this.state.items]
      counter.forEach((element , i) => {
        if(element.id === id){
          counter[i].num += 1;
          items[id-1] = 1;
        }
      })
      this.setState({
        counter : counter ,
        items : items
      })
    
  }

  subNum = (id) => {
    let counter = [...this.state.counter];
    let items = [...this.state.items]
       counter.map((elment  , index) => {
      if(elment.id === id){
        if(counter[index].num === 0 ){
          console.log('its zero')
        }else{
          counter[index].num -= 1;
          if(counter[index].num === 0){
            items[id-1] = 0
            this.setState({
              items : items
            })
              }
        }
      }
    })
    this.setState({
      counter : counter ,
      items : items
    })
    
    
  }

  totalItems = () => {
    const {items} = this.state;
    let x = 0;
    items.map(elment => {
      x += elment;
    })
    return x;
    
  }

 
  render(){
    
    return(
      <div className="container">
        <div className="items">
          <nav>
            <AiOutlineShoppingCart  id = 'shopping'/>
            <label htmlFor="" className = 'totallable'>
              {this.totalItems()}
            </label>
            <label htmlFor="">
              Items
            </label>
          </nav>
        </div>
        <div className="buttons">
            {/* refresh button */}
            <BsArrowRepeat onClick = {this.goClear} size = '25px'/>
            <br/>
            <div className="firstone" >
            <label htmlFor="" className='alllabels'>
              {this.state.counter[0].num}
            </label>
            <AiOutlinePlusCircle onClick = {() => {this.inc(1)}} size = '25px'/>
            <AiOutlineMinusCircle onClick = {() => {this.subNum(1)}} size = '25px'/>
            <br/>
            <br/>
            <label htmlFor="" className='alllabels'>
              {this.state.counter[1].num}
            </label>
            <AiOutlinePlusCircle onClick = {() => {this.inc(2)}} size = '25px'/>
            <AiOutlineMinusCircle onClick = {() => {this.subNum(2)}} size = '25px'/>
            <br/>
            <br/>
            <label htmlFor="" className='alllabels'>
              {this.state.counter[2].num}
            </label>
            <AiOutlinePlusCircle onClick = {() => {this.inc(3)}} size = '25px'/>
            <AiOutlineMinusCircle onClick = {() => {this.subNum(3)}} size = '25px'/>
            <br/>
            <br/>
            <label htmlFor="" className='alllabels'>
              {this.state.counter[3].num}
            </label> 
            <AiOutlinePlusCircle onClick = {() => {this.inc(4)}} size = '25px'/>
            <AiOutlineMinusCircle onClick = {() => {this.subNum(4)}} size = '25px'/>
            

            </div>
        </div>
      </div>
    );
  }
}


export default App;
