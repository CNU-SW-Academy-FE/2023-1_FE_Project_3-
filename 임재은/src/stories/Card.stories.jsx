import { Card } from "../component/base";

export default {
    title: 'Component/Card',
    component: Card,
    argTypes: {
        display: {
            defaultValue: "false",
            control: { type: "boolean" }  
        },
        src: {
            type: { name: 'string', required: true },
            defaultValue: 'https://picsum.photos/200',
            control: { type: 'text' }
        },
        width: {
            defaultValue: 200,
            control: { type: 'range', min: 200, max: 600 }
        },
        height: {
            defaultValue: 200,
            control: { type: 'range', min: 200, max: 600 }
        },
        alt: {
            control: 'string'
        },
        mode: {
            defaultValue: 'cover',
            options: ['cover', 'fill', 'contain'],
            control: { type: 'inline-radio' }
        }
    }
}

export const Default = (args) => {
    return <><Card {...args} /></>;
};