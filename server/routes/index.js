let router = require('express-promise-router')();
import controllers from '../controllers/index'
import passport from 'passport'

router.route('/signup')
	.post(controllers.signUp);

router.route('/login')
	.post(controllers.logIn);

router.route('/dashboard')
	.get(passport.authenticate('jwt', { session: false }), controllers.dashboard);

router.route('/saveBook')
	.get(passport.authenticate('jwt', { session: false }), controllers.saveBook);			

module.exports = router