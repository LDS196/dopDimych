import React, {useState} from 'react';

type PropsType={
    on: boolean
    onChange:(on:boolean)=>void
}

export const OnOff = (props:PropsType) => {


    const onStyle = {
        background: props.on ? 'green' : ''
    }
    const offStyle = {
        background: props.on ? '' : 'red'
    }
    const indicatorStyle = {
        background: props.on ? 'green' : 'red'
    }
    return (

            <div>
                <button style={onStyle} onClick={() => {
                    props.onChange(true)
                }}>On
                </button>
                <button style={offStyle} onClick={() => {
                    props.onChange(false)
                }}>Off
                </button>
                <button style={indicatorStyle}>indicator</button>
            </div>



    )
}


