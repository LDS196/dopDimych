import React, {useState} from 'react';

type PropsType={
    onChange:(on:boolean)=>void
    defaultOn?:boolean
}

export const UncontrolledOnOff = (props:PropsType) => {

    let [on, setOn] = useState(props.defaultOn?props.defaultOn:false );
    const onStyle = {
        background: on ? 'green' : ''
    }
    const offStyle = {
        background: on ? '' : 'red'
    }
    const indicatorStyle = {
        background: on ? 'green' : 'red'
    }
    return (
            <div>
                <button style={onStyle} onClick={() => {
                    props.onChange(true)
                    setOn(true)
                }}>On
                </button>
                <button style={offStyle} onClick={() => {
                    props.onChange(false)
                    setOn(false)
                }}>Off
                </button>
                <button style={indicatorStyle}>indicator</button>
            </div>
    )
}


