import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4,
}
export function Rating(props: RatingPropsType) {
    if(props.value ===1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if(props.value ===2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if(props.value ===3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if(props.value ===4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
        return (
            <div>
                <Star selected = {true} />
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        );
    }

type StarPropsType = {
    selected: boolean,
}
function Star(props: StarPropsType) {
    console.log('Star')

    if(props.selected){
        return <span><b>Star1 </b></span>
    } else {
        return <span>Star2 </span>
    }

}