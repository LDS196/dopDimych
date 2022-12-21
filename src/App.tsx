import React from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import {Rating} from "./components/rating/rating";
import OnOff from "./components/OnOf/OnOff";


function App() {

    return (
        <div>
            <PageTitle title = {'This is'}/>
            <PageTitle title = {'Frends'}/>
            <Rating value={3}/>
            <Accordion titleValue={'first title'} collapsed={true}/>
            <Accordion titleValue={'second title'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <OnOff/>
            <OnOff/>
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


