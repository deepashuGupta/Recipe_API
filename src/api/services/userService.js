const User = require('../models/userSchema');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.homePageService = () => {
    return new Promise((res,rej) => {
        res("This Is Home Page to check the connection")
    })
}

exports.userSignUpService = (req) =>{
    const { name, username,email,password } = req.body;

    const newUser = new User({name, username,email,password});

    return new Promise((res,rej) => {
        User.findOne({username : username})
        .then( existedUser => {
            if(existedUser) return rej('User already existed !');
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    // Store hash in your password DB.
                    newUser.password = hash
                    const token = jwt.sign({newUser}, process.env.SECERT_KEY, {expiresIn : '1h'})
                    req.header('auth-token',token)
                    console.log(token)
                    newUser.save()
                    .then(newUser => res(newUser))
                    .catch(err => rej(err))
                });
            });
        }).catch(err => rej(err))
        // res(newRecipe)
    })
}

exports.userSignInService = (req) =>{
    const {username, password} = req.query
    return new Promise((reslove,rej) => {
        User.findOne({username})
        .then(foundedUser => {
            if(!foundedUser) return rej('User has not been found')
            bcrypt.compare(password, foundedUser.password, function(err, res) {
                // res === true
                if(!res) return rej('Password Incorrect !');
                const token = jwt.sign({foundedUser}, process.env.SECERT_KEY, { expiresIn: '1h' });
                req.header('auht-token',token)
                reslove(token)
            });
        })
        .catch (err => rej(err))
    })

}

