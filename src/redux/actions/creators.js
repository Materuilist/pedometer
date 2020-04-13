import { SET_ACTIVITIES} from "./types";

export function postActivity(distance){
    return async function(dispatch){
        const date = new Date(Date.now());
        const res = await fetch('http://localhost:3000/walking', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                date,
                distance
            })
        })
        if(res.status===201){
            dispatch(fetchActivities());
        }
    }
}

export function setActivities(activities){
    return({
        type:SET_ACTIVITIES,
        activities
    })
}

export function fetchActivities(){
    return async function(dispatch){
        const res = await fetch('http://localhost:3000/walking');
        const activities = await res.json();
        dispatch(setActivities(activities));
    }
}