import { createStore } from 'redux';

export const LOGIN = 'LOGIN';

export const login = (email, password) => ({
    type: LOGIN,
    payload: {
        value: {
            email,
            password
        }
    }
})
const initialState = {
    email: '',
    isLoggedIn: false
}
const reducer = (state=initialState, action) => {
        switch(action.type){
            default:
                return state;
        }
    }; 

const store = createStore(
        reducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    export default store;