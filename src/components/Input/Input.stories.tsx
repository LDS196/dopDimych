import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    // component: OnOff,
}


export const GetValueOfUncontrolledInputByPressButton = () => {
    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            <span>{value}</span>
        </>
    )
}

export const ControlledSelect = () => {
    let [value, setValue] = useState<string | undefined>(undefined);
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
setValue(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChange} >
            <option value={1}>Minsk</option>
            <option value={2}>Mocwef</option>
            <option value={3}>dfdfd</option>
        </select>
    )
}