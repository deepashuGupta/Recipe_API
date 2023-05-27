const router = require('express').Router();
const {
    homePageController,
    userSignInController,
    userSignUpController 
} = require('../controllers/userController');
const { route } = require('./recipeRoutes');

const { isLoggedIn } = require('../middleware/authmiddleware')

/**
 * @routes GET /user/homepage
 * @description Home page for testing
 * @access PUBLIC
 */

router.get('/homepage',isLoggedIn,homePageController);

/**
 * @routes POST /user/singup
 * @description It create new user and saved into database
 * @access PUBLIC
 */

router.post('/signup',userSignUpController);

/**
 * @routes GET /user/singin
 * @description It fetch the register user
 * @access PUBLIC
 */

router.get('/signin',userSignInController)

module.exports = router