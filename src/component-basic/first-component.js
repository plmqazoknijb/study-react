import React from "react";
import ReactDOM from "react-dom";

function FirstComponent(){
    return <div>First Component</div>
}

function HelloWorld(){
    return <h1>Hello, World!</h1>
}

//x,y 값을 파라미터로 받고 중괄호 내부의 return 구문 만나 값 리턴
const add = (x,y) => {
    return x + y;
}

//파라미터의 개수가 하나면 소괄호 생략가능
// 중관호 안쓰면 해당 식이 평가된 값이 바로 반환됨
const douvle = x => 2*x;

//파라미터의 갱개수가 없으면 소괄호 써줘야 함
const sayHello = () => console.log('Hello');

function Cat() {
    return <div>🐱</div>
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function() {
    return <div>🐶</div>
}

// 화살표 함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>

function AnimalContainer() {
    return (
        /* 일반적인 태그 사용 가능 */
        // <div style={{fontSize: "50px"}}>
        //     {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
        //     <Cat />
        //     <Dog />
        //     <Pig />
        // </div>
        <>
            <Cat/>
            <Dog />
            <Pig />
        </>
    )
}


ReactDOM.render(<AnimalContainer/>, document.getElementById('root'));