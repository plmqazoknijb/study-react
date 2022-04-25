import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
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
const RepoItem = (props) => {
    const { name, description, forks_count, stargazers_count, watchers_count, owner: { login } } = props.repo
    console.log(props.repo)

    return (
        <div>
            <h1><a href={`https://github.com/${login}/${name}`}>{name}</a></h1>
            <p>{description ? description : "저장소 설명이 없습니다."}</p>
            <p>fork: {forks_count} star: {stargazers_count} watchers: {watchers_count}</p>
        </div>
    )
}

function RepoSearchApp() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [userName,setUserName]=useState(null)
    useEffect(() => {
        if(userName !== null){
            fetch(`https://api.github.com/users/${userName}/repos`,
        {
            headers: {Authorization: "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"}
        })
        .then(res => res.json())
        .then(data => {
            // 데이터 설정 및 로딩 상태 갱신
                setRepos(data)
                setLoading(false)
            })
        }
    }, [userName])

    if(userName === null)return(
        <div>
            <Search onSearch = {setUserName}/>
            <h1>유저 아이디를 입력해주세요.</h1>
        </div>
    )

    return (
        <div>
            <Search onSearch = {setUserName}/>
            {
                repos.length === 0
                    ? loading ? <h1>저장소를 불러오는 중입니다.</h1> : <h1>표시할 저장소가 없습니다.</h1>
                    :
                    <ul>
                        {
                            repos.map((repo, idx) => {
                                return (<li key={idx}>
                                    <RepoItem repo={repo} />
                                </li>)
                            })
                        }
                    </ul>
                
            }
        </div>
    )
}

ReactDOM.render(<RepoSearchApp />, document.getElementById("root"))