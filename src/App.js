import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // const showAccordion = () => {
    //     if (window.location.pathname === '/') {
    //         return <Accordion items={items} />
    //     }   
    // };

    // const showList = () => {
    //     if (window.location.pathname === '/list') {
    //         return <Search />
    //     }
    // };

    // const showDropdown = () => {
    //     if (window.location.pathname === '/dropdown') {
    //         return <Dropdown
    //             label = "Select a color"
    //             options = {options}
    //             selected = {selected}
    //             onSelectedChange = {setSelected}
    //         />
    //     }
    // };

    // const showTranslation = () => {
    //     if (window.location.pathname === '/translate') {
    //         return <Translate />
    //     }
    // }

    return (
        <div>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                label= "Select the language"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );

};

export default App;