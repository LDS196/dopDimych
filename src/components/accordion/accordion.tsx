import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,

}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion')
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
}
type AccordionTitlePropsType = {
    title: string,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle')
    return (
        <h3>{props.title}</h3>

    )
}

function AccordionBody() {
    console.log('AccordionBody')
    return (
        <ul>
            <li>1dd</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;