import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import {Rating, RatingValueType} from "./components/rating/rating";
import OnOff from "./components/OnOf/OnOff";
import UnControlAccordion from "./components/accordion/UnControlAccordion";
import {UnControlledrating} from "./components/rating/UnControlledrating";





function App() {
let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div>
            <OnOff/>
            <OnOff/>
            <Rating ratingValue={ratingValue}callBackRating={setRatingValue}/>
            {/*<PageTitle title = {'This is'}/>*/}
            {/*<PageTitle title = {'Frends'}/>*/}

            {/*<Accordion titleValue={'first title'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'second title'} collapsed={false}/>*/}




            <UnControlAccordion titleValue={'1list'}/>
            <UnControlledrating />
        </div>
    );
}

type PageTitleProps ={
    title: string,
}
function PageTitle(props: PageTitleProps ) {
    return(
        <h1>{props.title}</h1>
    )
}



export default App;


