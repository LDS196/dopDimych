import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion change fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbackProps={
    onChange: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: true,

}
export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: false,

}



export const ModeChanging = () => {
    let [value, setValue] = useState(false);
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}