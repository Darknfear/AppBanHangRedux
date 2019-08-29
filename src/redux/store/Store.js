import { createStore } from 'redux'

const defaultState = {
    isShowSearch : false
}

const reducer = ( state = defaultState,action) => {
    switch(action.type){
        case "SHOW_SEARCH" :
            return {
                isShowSearch : !state.isShowSearch
            }
        default :
            break;    
    }
    return state
}

const store = createStore(reducer);
export default store;