const redux = require('redux')
const createStore = redux.createStore;


const initialState = {
    counter: 0
}

/**
 * Reducer
 * @param state (old state)
 * @param action  ( )
 */

const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER') {
        return{
            ...state,
            counter: state.counter + action.payload
        };
    }
}

//Store 
const store = createStore(rootReducer); //needs to be initialized by a reducer // strongly connected to a store 
console.log(store.getState());


//Dispatching Actions
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', payload: 10})
console.log(store.getState());



//Subscriptions
