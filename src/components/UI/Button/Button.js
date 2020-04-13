import React from 'react';

import cssClasses from './Button.module.css';

export default function({clickHandler, label, extraStyling={}}){
    return(<div onClick={clickHandler} style={extraStyling} className={cssClasses.Button}>
        {label}
    </div>)
}