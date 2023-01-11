import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOff} from "./components/OnOf/OnOff";
import {UnControlAccordion} from "./components/accordion/UnControlAccordion";
import {UnControlledRating} from "./components/rating/UnControlledRating";
import {UncontrolledOnOff} from "./components/OnOf/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [on, setOn] = useState(false);
    let [collapsed, setCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState(false);
    const items=[{title:"sfd", value: 1},{title:"wwww", value: 2}]
    return (
        <div>
            <OnOff on={on} onChange={setOn}/>
            <OnOff on={on} onChange={setOn}/>
            <Rating ratingValue={ratingValue} callBackRating={setRatingValue}/>
            {/*<PageTitle title = {'This is'}/>*/}
            {/*<PageTitle title = {'Frends'}/>*/}

            <Accordion titleValue={'Menu'} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}
                       items={items} onClick={()=> alert('ff')}
            />

            <UnControlAccordion titleValue={'1list'}/>
            <UnControlledRating defaultValue={3} onChange={()=>{}}/>
            <UncontrolledOnOff defaultOn={true} onChange={setSwitchOn}/>{switchOn.toString()}
        </div>
    );
}

type PageTitleProps = {
    title: string,
}

function PageTitle(props: PageTitleProps) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;


