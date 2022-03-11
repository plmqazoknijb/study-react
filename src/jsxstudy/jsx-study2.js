import React from "react";
import ReactDOM from "react-dom";
 
const myDiv = <div>
    @
    {true}    
    {false}    
    {undefined}    
    {null}
    @
</div>
 
const unreadMessages = ["asdf", "asd"];
const div2 = <div>
    <h1>Hello!</h1>
    {/* 만약 읽지 않은 메시지가 있다면 경고문을 출력 */}
    {
        unreadMessages.length > 0 ?
        <h2>You have {unreadMessages.length} unread messages.</h2> :
        <h2>다읽음</h2>
    }
</div>
 
// 조건문
function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}
 
const div3 = <div>
    {conditionalRender(30)}
</div>
 
const h1 = <h1 style={{color: "red", backgroundColor: "lightblue", fontSize: "50px"}}>Hello Style!</h1>
 
ReactDOM.render(h1, document.getElementById('root'))
