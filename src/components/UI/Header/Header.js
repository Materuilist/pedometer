import React from 'react';

import cssClasses from './Header.module.css';

export default function({children}){
    return (
        <div className={cssClasses.Header}>
            <div className={cssClasses.Content}>
                {children}
            </div>
        </div>
    )
}