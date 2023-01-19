import React, {useState} from 'react';
import { ComponentMeta} from '@storybook/react';
import {Select} from "./Select";



export default {
    title: 'Select stories',
    component: Select,
}as ComponentMeta<typeof Select>;


export const WithValue = () =>{
    const [value,setValue]=useState('2')
return <>
    <Select onChange={setValue}
                                         value={value} items={[
    {title: 'Minsk', value: '1'},
    {title: 'Moscow', value: '2'},
    {title: 'Kiev', value: '3'},
]}/>

</>
}
export const WithoutValue = () =>{
    const [value,setValue]=useState(undefined)
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Moscow', value: '2'},
                    {title: 'Kiev', value: '3'},
                ]}/>

    </>
}
