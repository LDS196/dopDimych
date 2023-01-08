import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = action('on or off clicked')
export const onMode = () => <OnOff on={true} onChange={callback}/>
export const offMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
}