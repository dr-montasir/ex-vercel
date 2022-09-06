import express from 'express';
import nm from 'native_math';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  let angle = nm.rib(0, 360);

  res.json({
    message: 'Hello',
    key: process.env.KEY,
    angle,
    sin_angle: nm.sin.deg(angle),
  });
});

// export default router;
module.exports = router;
