import React from 'react';

import cssClasses from './Layout.module.css';

import Pedometer from './Pedometer/Pedometer';

export default function(){
    return(<div className={cssClasses.Layout}>
        <Pedometer/>
    </div>)
}