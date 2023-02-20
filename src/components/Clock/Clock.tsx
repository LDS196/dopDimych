import React, {useEffect, useState} from 'react';

const get2DigitString = (value: number) => {
    return value < 10? '0' + value: value
}
type PropsType = {}
export const Clock: React.FC<PropsType> = () => {
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

const secondsString= get2DigitString(date.getSeconds())
const minutesString= get2DigitString(date.getMinutes())
const hoursString= get2DigitString(date.getHours())
    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    );
};
