import React, {useState} from 'react';



const OnOff = () => {
    let [on, setOn] = useState(false)

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
                    setOn(true)
                }}>On
                </button>
                <button style={offStyle} onClick={() => {
                    setOn(false)
                }}>Off
                </button>
                <button style={indicatorStyle}>indicator</button>
            </div>



    )
}


export default OnOff;