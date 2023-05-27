const { userValidator } = require('../validation/uservalidator');
const {
    homePageService,
    userSignUpService,
    userSignInService,
} = require('../services/userService')


exports.homePageController = (req,res,next) =>{
    homePageService().
    then(message => res.json({message}))
    .catch(err => res.json({message : 'somthing went Wrong', err}))
}


exports.userSignUpController = (req,res,next) =>{
    const {value, error} = userValidator(req.body);
    if(error) return res.status(401).json({error : error.details.map(m => m.message)})

    // res.json({value,error})
    userSignUpService(req)
    .then( user => res.status(200).json({message : 'User has been Created', user}))
    .catch(err => res.status(501).json({message : 'Somethig went wrong',err}))
}


exports.userSignInController = (req,res,next) =>{
    userSignInService(req)
    .then( user => res.status(200).json({message : 'User has been found', user}))
    .catch(err => res.status(501).json({message : 'Somethig went wrong',err}))
}