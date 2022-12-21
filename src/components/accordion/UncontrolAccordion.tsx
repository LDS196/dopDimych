import React, {useState} from "react";


type UncontrolAccordionType = {
    titleValue: string
}


function UncontrolAccordion(props: UncontrolAccordionType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    let [state, setState] = useState(false);

    function f1(){
        if(!state){
            setState(true)
        } else setState(false)
    }
    return (
        <div>
            <h3 onClick={() => {f1()}}>{props.title}</h3>
            {state ? <AccordionBody/> : ""}

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