import React, {useState} from "react";


export default {
    title: 'UseState.demo',
}


export const Example1 = () => {
    console.log('ex1 ')
    const [counter, setCounter] = useState(0)
// const changer = (state:number)=>{
//         return state +1
// }
    return <>
        <button onClick={() => setCounter(state=> state +1)}>+</button>
        {counter}
    </>
}