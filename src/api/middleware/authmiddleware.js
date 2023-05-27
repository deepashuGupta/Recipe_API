const jwt = require('jsonwebtoken');

exports.isLoggedIn = (req,res,next) =>{
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).json({message : 'User is not Autharized !'})
    }
    try{
        const user = jwt.verify(token, process.env.SECERT_KEY)
        req.user = user.foundedUser;
        next()
    }catch(error){
        let message = ''
        if(!req.user) {
            message = 'Session is Expired !'
        }
        message = error;
        res.status(500).json({error : message})
        console.log(error)
    }
}