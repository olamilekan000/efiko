import { combineReducers } from 'redux';
import SignInReducer from './signInReducer';
import SignUpReducer from './signUpReducer';

const rootReducer = combineReducers({
	signIn: SignInReducer,
	signUp: SignUpReducer
})

export default rootReducer
