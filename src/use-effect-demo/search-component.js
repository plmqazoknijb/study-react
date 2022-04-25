import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
function Search(props){
    const [input,setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    return(
        <div>
            <input type='text' onChange={handleChange} value={input}/>
            <button onClick={()=>{
                props.onSearch(input)
            }}>Search</button>
        </div>
    )
}
function App(props){
    const [userName,setUserName] = useState(null)
    useEffect(()=> {
        if(userName !== null){
            alert(userName)
        }
    },[userName])
    return(
        <div>
            <Search onSearch = {setUserName}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))