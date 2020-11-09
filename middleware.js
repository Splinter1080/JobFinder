
const ExpressError = require('./utils/ExpressError');
const User = require('./models/user');


module.exports.isLoggedIn = (req, res, next ) => { 
    if(!req.isAuthenticated()) { 
        req.session.returnTo = req.originalUrl ; 
        req.flash('error' , 'You must be logged in to continue') ;
        return res.redirect('/login') ; 
    }
    next();
}

module.exports.isEmployer = async( req, res , next ) => {
    const  id  = req.params.id ; 
    console.log(id) 
    const users = await User.findById(id);
    console.log(users) 
    if(users.emp) {
        req.flash('error' , ' You do not have the permission !'); 
        return res.redirect('/') ; 
    }
    next() ; 
}