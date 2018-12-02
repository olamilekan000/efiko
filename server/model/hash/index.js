import bcrypt from 'bcryptjs'

const hashPwd = async (pwd) => {
	try{
		let salt = await bcrypt.genSalt(10)
		return bcrypt.hash(pwd, salt)		
	}catch(err){
		console.log(err)
	}
}

const comparePwd = async (pwd, hashedPwd) => {
	return await bcrypt.compare(pwd, hashedPwd)
}

module.exports = { hashPwd , comparePwd}