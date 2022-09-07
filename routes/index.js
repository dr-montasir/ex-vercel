import express from 'express';

const router = express.Router();

// controllers
import { index } from '../controllers/index';

/* GET home page. */
router.get('/', index);

module.exports = router;
