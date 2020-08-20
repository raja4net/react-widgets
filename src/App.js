import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: "What is React?",
        content: "React is a javascript front-end library."
    },
    {
        title: "Why do you use React?",
        content: "It is a favorite javascript library amon front-end developers."
    },
    {
        title: "How do you use React?",
        content: "By creating react components"
    }
];

const options = [
    {
        label: 'The Color of Red',
        value: 'red'
    },
    {
        label: 'The Color of Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    
    return (
        <div>
            <Dropdown options={options}/>
        </div>);

};

export default App;