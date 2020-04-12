import React from 'react';

import Table from './Table/Table';
import Graph from './Graph/Graph';

import cssClasses from './Pedometer.module.css';

export default function(){
    return(<div className={cssClasses.Pedometer}>
        <Table/>
        <Graph/>
    </div>)
}