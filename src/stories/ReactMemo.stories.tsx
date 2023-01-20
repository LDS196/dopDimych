import React from 'react';
import {useState} from "react";

export default {
    title: 'React.memo.demo',
}
const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
type UsersType = { users: Array<string> }
const UsersSecret = (props: UsersType) => {

    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['qq', 'ww', 'www', 'wwwwwww'])
    const addUsers = () => {
        setUsers([...users, 'Vasya'])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>Add</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}