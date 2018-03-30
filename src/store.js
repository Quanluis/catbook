import { createStore } from 'redux';

export const LOGIN = 'LOGIN';
export const SIGNUP = "SIGNUP";

export const signup = (email,password) => ({
    type: SIGNUP, 
    payload: {
        value: {
            email,
            password
        }
    }
})

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
                email: action.payload.value.email,
                password: action.payload.value.password
            }
            case SIGNUP:
            return{
                ...state,
                isLoggedIn: false,
                email: action.payload.value.email
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