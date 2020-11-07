
const ExpressError = require('./utils/ExpressError');



module.exports.isLoggedIn = (req, res, next ) => { 
    if(!req.isAuthenticated()) { 
        req.session.returnTo = req.originalUrl ; 
        req.flash('error' , 'You must be logged in to continue') ;
        return res.redirect('/login') ; 
    }
    next();
}

// module.exports.isAuthor = async( req, res , next ) => {
//     const {id } = req.params ; 
//     const campground = await Campground.findById(id); 
//     if(!campground.author.equals(req.user._id)) {
//         req,flash('error' , ' You do not have the permission !'); 
//         return res.redirect(`/campgrounds/${id}`) ; 
//     }
//     next() ; 
// }
