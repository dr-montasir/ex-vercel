import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({
    data: [
      {
        name: 'Ahmed',
      },
      {
        name: 'Ali',
      },
    ],
  });
});

module.exports = router;
