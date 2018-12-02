import axios from 'axios'

const signupUser =  (signUpData) =>{
	return async (dispatch, getState) => {
		// make asyn call
		try{

			const userSignupData = await axios.post('/signup', signUpData)
			dispatch({ type: 'SIGN_UP_USER', userSignupData })

		}catch(err){
			dispatch({ type: 'SIGN_UP_USER_ERROR', err })
		}
		
	}
}

export default signupUser