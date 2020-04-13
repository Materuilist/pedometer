import React from 'react';

import cssClasses from './AddRowForm.module.css'

export default function(){
    return(<form className={cssClasses.AddRowForm}>
        <input className={cssClasses.FormItem} type='number' placeholder='Дистанция(в метрах)...'/>
        <button className={cssClasses.FormItem} type='submit'>OK</button>
    </form>)
}