import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import userController from '../controllers/userController';
import apiController from '../controllers/apiController';
const { catchErrors } = require('../handlers/errorHandlers');
const checkAuth = require('../handlers/check-auth');

router.post('/register',
	userController.validatePassword,
	catchErrors(userController.register)
);

router.post('/login', catchErrors(userController.login));

router.post('/editprofile',
	catchErrors(checkAuth),
	apiController.upload,
	catchErrors(apiController.resize),
	catchErrors(apiController.updateProfile)
);

module.exports = router;