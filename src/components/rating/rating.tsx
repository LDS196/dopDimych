import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingPropsType = {
    ratingValue: RatingValueType
    callBackRating: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.ratingValue > 0} value={1} callBackRating={props.callBackRating}/>
            <Star selected={props.ratingValue > 1} value={2} callBackRating={props.callBackRating}/>
            <Star selected={props.ratingValue > 2} value={3} callBackRating={props.callBackRating}/>
            <Star selected={props.ratingValue > 3} value={4} callBackRating={props.callBackRating}/>
            <Star selected={props.ratingValue > 4} value={5} callBackRating={props.callBackRating}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean,
    value: RatingValueType
    callBackRating: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    return (
        <span onClick={() => props.callBackRating(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>
    )

}