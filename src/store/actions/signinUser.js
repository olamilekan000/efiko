import axios from 'axios'

const signinUser = (userData) => {
	return async (dispatch, getState) => {
		try{
			let loginUserData = await axios.post('/login', userData)
			let { tokenGen }  = loginUserData.data

			localStorage.setItem('jwt', tokenGen)

			dispatch({ type: 'SIGN_IN_USER', tokenGen })
		}catch(err){
			dispatch({ type: 'SIGN_IN_USER_ERROR', err })
		}
	}
}

export default signinUser