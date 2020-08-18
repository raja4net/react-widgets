import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
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

const App = () => {
    
    return (
        <div>
        <Search />
        </div>);

};

export default App;