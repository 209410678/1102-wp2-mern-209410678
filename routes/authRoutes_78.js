import express from 'express';
const router = express.Router();

import { 
    register_78, 
    login_78, 
    updateUser_78 
} from '../controllers/authController_78.js';

router.route('/register_78').post(register_78);
router.route('/login_78').post(login_78);
router.route('/updateUser_78').patch(updateUser_78);

export default router;