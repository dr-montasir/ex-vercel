import express from 'express';

const router = express.Router();

// controllers
import { users, subRoute } from '../controllers/users';

/* GET users listing. */
router.get('/', users);
router.get('/sub-route', subRoute);

module.exports = router;
