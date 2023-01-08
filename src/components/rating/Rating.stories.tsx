import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;


export const EmptyRating = ()=><Rating ratingValue={0} callBackRating={()=>{}} />
export const Rating1 = ()=><Rating ratingValue={1} callBackRating={()=>{}} />
export const Rating2 = ()=><Rating ratingValue={2} callBackRating={()=>{}} />
export const Rating3 = ()=><Rating ratingValue={3} callBackRating={()=>{}} />
export const Rating4 = ()=><Rating ratingValue={4} callBackRating={()=>{}} />
export const Rating5 = ()=><Rating ratingValue={5} callBackRating={()=>{}} />
export const RatingChanging = ()=>{
    const [rating, setRating]=useState<RatingValueType>(5);
    return <Rating ratingValue={rating} callBackRating={setRating} />
}