import React, {useState} from "react";


type UncontrolAccordionType = {
    titleValue: string
}


function UncontrolAccordion(props: UncontrolAccordionType) {
    let [state, setState] = useState(false);

    function f1(){
        if(!state){
            setState(true)
        } else setState(false)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} f1={f1} state={state}/>
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string,
    f1:()=>void;
    state:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div>
            <h3 onClick={() => {props.f1()}}>{props.title}</h3>
            {props.state ? <AccordionBody/> : ""}

        </div>
    )

}

function AccordionBody() {
    return (
        <ul>
            <li>1dd</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolAccordion;