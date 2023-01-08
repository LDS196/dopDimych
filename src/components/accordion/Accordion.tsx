import React from "react";

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    /**
     * function open / close accordion
     */
    onChange: ()=>void
    /**
     * Optional color of header
     */
    color?:string
}

export function Accordion(props: AccordionPropsType) {
return(
    <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
)
}
type AccordionTitlePropsType = {
    color?:string
    title: string,
    onChange:()=>void;
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div>
            <h3 style={{color: props.color? props.color:'black'}} onClick={() => props.onChange()}>{props.title}</h3>
        </div>
    )

}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


