import nm from 'native_math';
import dotenv from 'dotenv';
dotenv.config();

export const index = (req, res) => {
  let angle = nm.rib(0, 360);

  res.json({
    message: 'Hello',
    key: process.env.KEY,
    angle,
    sin_angle: nm.sin.deg(angle),
  });
};
