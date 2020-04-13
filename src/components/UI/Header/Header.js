import React from 'react';

import cssClasses from './Header.module.css';

export default function({children, extraStyling, contentStyling}){
    return (
        <div style={extraStyling} className={cssClasses.Header}>
            <div style={contentStyling} className={cssClasses.Content}>
                {children}
            </div>
        </div>
    )
}