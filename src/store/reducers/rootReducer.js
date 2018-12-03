import { combineReducers } from 'redux';
import SignInReducer from './signInReducer';
import SignUpReducer from './signUpReducer';
import jwtReducer from './jwtReducer'

const rootReducer = combineReducers({
	signIn: SignInReducer,
	signUp: SignUpReducer,
	jwt: jwtReducer
})

export default rootReducer
