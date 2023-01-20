import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";


type UnControlAccordionType = {
    titleValue: string
}

export function UnControlAccordion(props: UnControlAccordionType) {
    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed:false});

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {

                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void;
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

