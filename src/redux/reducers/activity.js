import _ from 'lodash';

import { SET_ACTIVITIES, ADD_ACTIVITY } from '../actions/types';

const initialState = {
    activities:{
        loading:false,
        data:[]
    }
}

export default function(prevState=initialState, action){
    switch(action.type){
        case SET_ACTIVITIES:{
            const newState = _.cloneDeep(prevState);
            newState.activities = action.activities;
            return newState;
        }
        default:{
            return prevState;
        }
    }
}