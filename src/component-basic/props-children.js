import React from "react";
import ReactDOM from "react-dom";

function Child(props){
    return <div>{props.children}</div>
}

const Card = function(props) {
    return (
        <div style={{
            width: props.width, height: props.height,
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px"
        }}>
            {props.children}
        </div>
    )
}

const SlotMachine = function(props){
    const {s1,s2,s3} = props
    const allSame = s1 === s2 && s2 === s3
    const allSeven = allSame && s1 ==="7"

    return(
        <div>
            <div>{s1} {s2} {s3}</div>
            {
                allSame &&
                <div style={allSeven ? {color: "red"}:null}>Congrats!</div>
            }
        </div>)
}

ReactDOM.render(
    <div>
        {/* <Child>Hello</Child>
        <Child>
            <h1>Title</h1>
            <div>
                <ul>
                    <li>Itme 1</li>
                    <li>Itme 2</li>
                </ul>
            </div>
        </Child> */}
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
    </div>,
 document.getElementById('root'));