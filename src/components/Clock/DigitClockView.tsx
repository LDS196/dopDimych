import React from "react";
import {ClockViewType} from "./Clock";

export const get2DigitString = (value: number) => {
    return value < 10? '0' + value: value
}
export const DigitClockView: React.FC<ClockViewType> = ({date}) => {
    const secondsString = get2DigitString(date.getSeconds())
    const minutesString = get2DigitString(date.getMinutes())
    const hoursString = get2DigitString(date.getHours())
    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    )
}