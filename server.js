const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'hello',
    key: process.env.KEY,
  });
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
