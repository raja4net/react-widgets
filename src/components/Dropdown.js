import React, {useState} from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const renderedOptions = options.map((option) => {
        //filtering the options so that active option is not shown in list
        if (selected.value === option.value) {
            return null;
        }
        return (
            <div
                className="item"
                onClick={() => onSelectedChange(option)}
                key={option.value} >
                {option.label}
            </div>
        ); 
    });
    
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible  active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;