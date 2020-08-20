import React from 'react';

const Dropdown = ({ options }) => {
    const renderedOptions = options.map((option) => {
        return (
            <div className="item" key={option.value} >
                {option.label}
            </div>
        ); 
    });
    
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className="ui selection visible dropdown active">
                    <i className="dropdown icon"></i>
                    <div className="text">Select a color</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;