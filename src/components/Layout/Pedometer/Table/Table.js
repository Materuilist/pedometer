import React from 'react';

import cssClasses from './Table.module.css';

class Table extends React.Component{
    render(){
        return(
            <div className={cssClasses.Table}>
                Table
            </div>
        )
    }
}

export default Table;