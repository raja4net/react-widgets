import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const onBodyClick = (event) => {
        if (ref.current.contains(event.target)) {
            return;
       }
        setOpen(false);
        
    }
        
    useEffect(() => {
        document.body.addEventListener('click', onBodyClick);
        
        //this is a clean up function of useEffect which will be invoked next time useEffect is used
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

    }, []); //[] in useEffect means that this useEffect will render only once
    
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
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
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