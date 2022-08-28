import express from 'express';
import dotenv from 'dotenv';
import nm from 'native_math';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  let angle = nm.rib(0, 360);

  res.json({
    message: 'hello',
    key: process.env.KEY,
    angle,
    sin_angle: nm.sin.deg(angle),
  });
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
