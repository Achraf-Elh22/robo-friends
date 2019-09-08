import {CHANGE_SEARCH_FIELD} from './constants.js'

const INTIALSTATE = {
    searchField:''
}

export const searchRobots =  (state=INTIALSTATE,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD :
            return {...state,
                searchField: action.payload}
         default:
             return state
    }
}