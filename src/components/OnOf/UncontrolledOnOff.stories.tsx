import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action('on or off clicked')
export const onMode = () => <UncontrolledOnOff defaultOn={true}  onChange={callback}/>
export const offMode = () => <UncontrolledOnOff defaultOn={false}  onChange={callback}/>
