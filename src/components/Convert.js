import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    

    useEffect(() => {
        const setTimer = 
           setTimeout(() => {
            setDebouncedText(text);
            
           }, 1000);
           
        
        return () => {
            clearTimeout(setTimer);
        };
    }, [text]);
    
    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
            
            
        };
        doTranslation();
    }, [language, debouncedText]);
    
    return (
        <div className="ui header">{translated}
        </div>

    );
};

export default Convert;