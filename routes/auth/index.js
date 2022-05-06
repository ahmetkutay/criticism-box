const {Router} = require('express');

const registrationRouter = require('./registration');
const loginRouter = require('./login');
const verificationRouter = require('./verification');
const passwordResetRouter = require('./resetpassword');
const getUserlistRouter = require('./userlist');
const googleOauth = require('./googleOauth');

const router = Router();

module.exports = (params) => {
    router.use(registrationRouter(params));
    router.use(loginRouter(params));
    router.use(verificationRouter(params));
    router.use(passwordResetRouter(params));
    router.use(getUserlistRouter(params));
    router.use('/google', googleOauth(params));
    return router;
};