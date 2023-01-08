import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UnControlAccordion} from './UnControlAccordion';
import {action} from "@storybook/addon-actions";




export default {
    title: 'UnControlAccordion',
    component: UnControlAccordion,
} as ComponentMeta<typeof UnControlAccordion>;

const callback = action('accordion change fired');

export const ModeChanging = () => {
    return <UnControlAccordion titleValue={'Menu'} />
}