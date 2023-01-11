import React from "react";

type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    /**
     * function open / close accordion
     */
    onChange: () => void
    /**
     * Optional color of header
     */
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    color?: string
    title: string,
    onChange: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div>
            <h3 style={{color: props.color ? props.color : 'black'}} onClick={() => props.onChange()}>{props.title}</h3>
        </div>
    )

}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    )
}


