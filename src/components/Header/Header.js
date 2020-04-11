import React from 'react';

import cssClasses from './Header.module.css';

export default function(){
    return (
        <div className={cssClasses.Header}>
            <div className={cssClasses.Content}>
                Шагомер
            </div>
        </div>
    )
}