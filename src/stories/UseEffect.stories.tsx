import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffect.demo',
}


export const Example1 = () => {
    console.log('ex1 ')
    const [counter, setCounter] = useState(0)
useEffect(()=>{
    document.title= counter.toString()
})
    return <>
        <button onClick={() => setCounter(state=> state +1)}>+</button>
        {counter}
    </>
}

export const SetTimeOutExample = () => {
    console.log('ex1 ')
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
           setCounter(state=> state + 1)
        },1000)

    },[])
    return <>
        {/*<button onClick={() => setCounter(state=> state +1)}>+</button>*/}
        {counter}
    </>
}