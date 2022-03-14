import React from "react";
import ReactDOM from "react-dom";

const ConponentWithProps = function(props){
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

const arr = [100,200];
const [v1,v2] = arr;

//객체 비구조화 할당
const user = {name: "John", age:  20}
//const {name,age} = user;

const name = "Hello";
const {name : n, age} = user;

function f({name,age}){
    console.log(name,age)
}

ReactDOM.render(<ConponentWithProps values = "Hello"/>, document.getElementById('root'));