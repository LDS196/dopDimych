import React, {useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'Use.memo',
}
export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resA = 1
    let resB = 1
    resA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            temp = temp * i
        }
        return temp
    }, [a])

    for (let i = 1; i <= b; i++) {
        resB = resB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>{resA}</div>
        <div>{resB}</div>
    </>
}


type UsersType = { users: Array<string> }
const UsersSecret = (props: UsersType) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReact = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['qq', 'wafw', 'www', 'wwwwwwaw','waaawwwwwaw'])

    const newArrFilter = useMemo(() => {
        console.log('1')
        return users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArrFilter}/>
    </>
}