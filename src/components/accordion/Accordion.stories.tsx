import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";

const GetCategoryObj =(categoryName:string)=> ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj("Color")
        },
        onChange: {
            ...GetCategoryObj("Event")
        },
        onClick: {
            ...GetCategoryObj("Event")
        }
    }
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion change fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbackProps = {
    onChange: callback,
    items:[{title:"sfd", value: 1},{title:"wwww", value: 2}],
    onClick:()=>{callback()}
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

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    let [value, setValue] = useState(false);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    items:[{title:"sfd", value: 1},{title:"wwww", value: 2}],
    titleValue: 'Menu',
    onClick:()=>{alert('dddddddddd')}

}