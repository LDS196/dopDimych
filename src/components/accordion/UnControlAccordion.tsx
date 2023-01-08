import React, {useState} from "react";


type UnControlAccordionType = {
    titleValue: string
}


export  function UnControlAccordion(props: UnControlAccordionType) {
    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string,
    onClick:()=>void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => props.onClick()}>{props.title}</h3>
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

