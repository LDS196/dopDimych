import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitClockView} from "./DigitClockView";


type PropsType = {
    mode?: 'digital'| 'analog'
}
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId= setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return()=>{

clearInterval(intervalId)
        }
    }, [])


let view;
    switch (props.mode){
        case 'analog':
            view= <AnalogClockView date={date}/>
            break
        default:
            view= <DigitClockView date={date}/>
    }
    return (<>
            {view}
        </>
    );
};
export type ClockViewType={
    date: Date
}

