// --------- Class Based Compnent ------------------------
class ParentComponent extends React.Component
{
  render(){
    return (
      <>
        <h3>These is Parent Component</h3>
        <ChildComponent childProperty={this.props.property}/>
      </>
    );
  }
}
class ChildComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {"count":0,"color":"black"}
  }
  increase = ()=>{
    this.setState({count:this.state.count+1});
  };
  change = ()=>{
    let current = this.state.color;
    (current==="red") ? this.setState({color:"black"}) : this.setState({color:"red"})

  }
  render(){
    return (
      <>
        <p>...These is Child Component {this.props.childProperty}</p>

        <p>...Count State : {this.state.count}</p>
        <button onClick={this.increase}>Inc</button>

        <p>...Color State : {this.state.color}</p>
        <button onClick={this.change}>Change</button>
      </>
    );

  }
}
//
const cntnr = document.getElementById('container');
const rootTest = ReactDOM.createRoot(cntnr);
rootTest.render(<ParentComponent property="value"/>);


class TestComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {"s1":"s1value"}
    this.testFunction = this.testFunction.bind(this);
  }
  testFunction = function(){
   this.setState({s1:"s1valuechnaged"});
  }
  static getDerivedStateFromProps(props,state){
    return {s1:props.p1};
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({s1:"s1valuechangedagain"})},3000);
  }
  shouldComponentUpdate(){
    return true;
  }
  render(){
    return (
      <>
        <h3>The Test Component</h3>
        <p>... PROP1:- {this.props.p1} ||  STATE1:{this.state.s1}</p>
        <button onClick={this.testFunction}>Test</button>
      </>
    );
  }
}
const testRoot = ReactDOM.createRoot(document.getElementById('container3'));
testRoot.render(<TestComponent p1="p1value"/>)

class ColorComponent extends React.Component
{
  constructor(){
    super();
    this.state = {"opacity":"1","showChild":true};
    console.log('called constructor');
  }
  static getDerivedStateFromProps(props,state){
    console.log("--------------------------")
    console.log("called getDerivedStateFromProps");
    return {opacity:props.setopac}
  }
  componentDidMount(){
    console.log("called ComponentDidMount");
    setTimeout(()=>{
      this.setState({opacity:"0.3"});
    },3000);
  }
  shouldComponentUpdate(){
    console.log("called shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("called getSnapshotBeforeUpdate");
    let el = document.getElementById('prev');
    el.append(prevState.opacity);
    return prevState.opacity;
  }
  componentDidUpdate(){
    console.log("called componentDidUpdate");
    let el = document.getElementById('up');
    el.append(this.state.opacity);
  }
  render(){
    let childComponent;
    console.log("called render");
    if(this.state.showChild){
      childComponent = <ColorChild/>
    }
    return (
      <>
        <h4>ColorComponent</h4>
        <p>Opacity : {this.state.opacity}</p>
        <p>Color : {this.props.color}</p>
        <p id="prev">Previous Values :</p>
        <p id="up">Updated Values :</p>

        {childComponent}
        <button id="delBtn" onClick={this.delChild}>Delete</button>
      </>
    );
  }
  delChild = ()=>{
    this.setState({showChild:false});
  }
}
const container = document.getElementById('container4');
const colorRoot = ReactDOM.createRoot(container);
colorRoot.render(<ColorComponent color="red" setopac="0.5"/>);

class ColorChild extends React.Component
{
  componentWillUnmount(){
    console.log("called componentWillUnmount");
  }
  render(){
    return <p>Child Component!</p>
  }
}
// class TimerComponent extends React.Component
// {
//   date = new Date();
//   constructor(props) {
//     super(props);
//     this.state = {hours: this.date.getHours(),min: this.date.getMinutes(),sec: this.date.getSeconds()};
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({hours: this.date.getHours(),min: this.date.getMinutes(),sec: this.date.getSeconds()})
//     }, 1000)
//   }

//   render(){
//     return <p>{this.state.hours}:{this.state.min}:{this.state.sec}</p>
//   }
// }
// const ctnr1 = document.getElementById('container1');
// const root1 = ReactDOM.createRoot(ctnr1);
// root1.render(<TimerComponent/>);
// function FunctionComponent(props){
//   return <h2 className="header2">Test Component Type: {props.type}</h2>;//
// }

// const ctnr1 = document.getElementById('container1');
// const root1 = ReactDOM.createRoot(ctnr1);
// root1.render(<FunctionComponent type="function-based"/>);

// class ClassComponent extends React.Component
// {
//   render(){
//     return <h2 className="header1">Test Component2 Type: {this.props.type}</h2>; //
//   }
// }

// const ctnr2 = document.getElementById('container2');
// const root2 = ReactDOM.createRoot(ctnr2);
// root2.render(<ClassComponent type="class-based"/>);


// ---------------- Function Base Component -------------------

function CarComponent(props){
  return (
    <>
      <p>Car having:</p>
      <p>- Brand: {props.carDetails.brand}</p>
      <p>- Model: {props.carDetails.model}</p>
    </>
  );
}
function Brands(props){
  return (<p>{props.brand}</p>);
}
function Garage(){
  const carInfo = {brand:"ford",model:"mustang"}
  const brands = [
    {id:1,brand:'ford'},
    {id:2,brand:'toyota'},
    {id:3,brand:'suzuki'}
  ];
  return (
    <>
      <p>In Garage we have</p>
      <CarComponent carDetails={carInfo}/>
      
      <p>And We have card with brands of</p>
      <div>
        {brands.map((item)=><Brands key={item.id} brand={item.brand}/>)}
      </div>
      <p>---------------------------------------------</p>
    </>
  );
}
const carRoot = ReactDOM.createRoot(document.getElementById('container5'));
carRoot.render(<Garage/>);

// ---------- form handling ---------

function CarForm(){
  const [inputs,setInputs] = useState({});

  const handleChanges = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(inputs);
    alert(inputs);
  }
  
  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label>Enter the brand name :
          <input type="text" name="brand" value={inputs.brand} onChange={handleChanges}/>
        </label><br></br>
        <label>Enter the model name :
          <input type="text" name="model" value={inputs.model} onChange={handleChanges}/>
        </label><br></br>
        <label>Enter the description :
          <textarea name="desc" value={inputs.desc} onChange={handleChanges}></textarea>
        </label><br></br>
        <label>Select type :
          <select name="type" value={inputs.type} onChange={handleChanges}>
            <option value="sedan">sedan</option>
            <option value="suv">suv</option>
            <option value="coup">coup</option>
          </select>
        </label><br></br>
        <input type='submit'/>
      </form>
    </>
  );
}
const formRoot = ReactDOM.createRoot(document.getElementById('form-container'));
formRoot.render(<CarForm />);

// ---------------- Hooks -------------------
import { useState } from 'react';

function MenuComponent3() {
    const [items, setItem] = useState([]);
    let addItem = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }
        ]);
    }
    return (
        <>
            <div className="col-6">
                <button onClick={addItem}>Add items</button>
            </div><br></br>

            <div className='col-6'>
                {items.map(item => <p key={item.id}>{item.value}</p>)}
            </div>
        </>
    );
}


import { useState } from 'react';

function MenuComponent2() {
    const [name, setName] = useState({ first_name: "", last_name: "" });
    return (
        <>
            <form>
                <input type='text' onChange={(e) => setName({...name, first_name: e.target.value })} /><br />
                <input type='text' onChange={(e) => setName({...name, last_name: e.target.value })} />
            </form>
            <p></p>
            <div>
                <p>First Name {name.first_name}</p>
                <p>Last Name {name.last_name}</p>
            </div>


        </>
    );
}


import {useState} from 'react';

function MenuComponent(){
    const [count,setCount] = useState(0);
    const incCount = ()=>{
        setCount((prevCount)=>{return prevCount+1});
    }
    return (
        <>
            <button onClick={incCount}>Count {count}</button>
        </>
    );
}
// --------------------------------------
import React, { Component } from "react";

class UseEffectClass extends React.Component
{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    addCount = ()=>{
        this.setState({
            count:this.state.count+1
        });
        document.title = `Clicked ${this.state.count} Times`
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.count} Times`
    }
    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} Times`
    }
     render(){
        return (
            <>
                <button onClick={this.addCount}>Count {this.state.count}</button>
            </>
        );
     }
}
// ---------------------------------------
import {useState, useEffect} from 'react';

function UseEffectHook3(){
    const[count,setCount] = useState(0);
    const tick = ()=>{
        setCount(prevCount => prevCount+1);
    }

    useEffect(()=>{
        let timer = setInterval(tick,1000);
        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <>
            {count}
        </>
    );
}
// --------------------------------------
import { useEffect, useState } from "react";

function UseEffectHook1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const addCount = () => setCount(count + 1);
    useEffect(() => {
        console.log("updating document title");
        document.title = `Clicked ${count} Times`
    },[count]);
    return (
        <>
            <div>
                <button onClick={addCount}>Add Count {count}</button>
                <br></br>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        </>
    );
}
export default UseEffectHook1;
// --------------------------------------
import { useEffect, useState } from "react";
function UseEffectHook2(){
    const[x,setX] = useState(0);
    const[y,setY] = useState(0);

    let logMouseHover = (e)=>{
        setX(e.clientX);
        setY(e.clientY);
        console.log("Event Called");
    }
    useEffect(()=>{
        console.log("use effect called");
        window.addEventListener('mousemove',logMouseHover);
        return ()=>{
            console.log('component unmounting code');
            window.removeEventListener('mousemove',logMouseHover);

        }
    },[])
    return (
        <>
            <p>X: {x}</p>
            <p>Y: {y}</p>
        </>
    );
}
// --------------------------------------
import {useState} from 'react';
import UseEffectHook2 from "./UseEffectHook2";

function UseEffectToggleHook2(){
    const [display,setDisplay] = useState(true);
    return (
        <>
            <button onClick={()=>setDisplay(!display)}>Toogle Display</button>
            {display && <UseEffectHook2/>}
        </>
    );
}
// ------------------ UseContext Hooks --------------------

import React from 'react';
import Child1 from './Child1';

export const UserContext = React.createContext();
export const ItemContext = React.createContext();

function ContextHook1() {
    return (
        <>
            <UserContext.Provider value="user1">
                <ItemContext.Provider value="item1">
                    <Child1 />
                </ItemContext.Provider>
            </UserContext.Provider>

        </>
    );
}

import React, {useContext} from 'react';
import { ItemContext,UserContext } from './ContextHook1';


function Child3(){
    return (
        <>
            <div className='col-12'>
               <UserContext.Consumer>
                {
                    user => {
                        return (
                           <ItemContext.Consumer>
                            {
                                item =>{
                                    return(
                                            <>
                                                UserContext :{user},
                                                ItemContext : {item}
                                            </>
                                    );
                                }
                            }
                           </ItemContext.Consumer>
                        );
                    }
                }
               </UserContext.Consumer>
            </div>
        </>
    );
}
// --------------------------------------
// --------------------------------------