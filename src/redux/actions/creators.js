import { ADD_ACTIVITY, SET_ACTIVITIES, ALTER_ACTIVITY, REMOVE_ACTIVITY } from "./types";

export function addActivity(activity){
    return({
        type:ADD_ACTIVITY,
        activity
    })
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