const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn , isEmployer} = require('../middleware');
const jobs = require('../controllers/jobs');


router.route('/employer/jobDelete/:jobid/:uid')  
.post(isLoggedIn ,   jobs.delJobs)
router.route('/employer/jobEdit')  
.get(isLoggedIn , isEmployer ,  jobs.editJobs)
router.route('/employer')
    .get(isLoggedIn  ,   jobs.renderDetails)
router.route('/employer/:id')  
.post(isLoggedIn , isEmployer, jobs.registerJobDetails)
router.route('/employer/edit/:id/:jobid')  
.post(isLoggedIn , isEmployer, jobs.editJobDetails)
router.route('/employer/:id')  
.get(isLoggedIn , isEmployer,  jobs.listJobs)



module.exports = router;