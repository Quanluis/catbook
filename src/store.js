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
    password: '',
    isLoggedIn: false
}
const reducer = (state=initialState, action) => {
        switch(action.type){
            case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                email: action.payload.value.username
            }
            default:
                return state;
        }
    }; 

const store = createStore(
        reducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    export default store;