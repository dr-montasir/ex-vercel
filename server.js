import { readdirSync } from 'fs';
import express from 'express';
import path from 'path';
import cors from 'cors';
const logger = require('morgan');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'routes')));

// routes
const routesDir = './routes';
readdirSync(routesDir).map((route) => {
  // console.log(route); // example.js
  // console.log(path.parse(route).name); // example
  // console.log(path.parse(route).ext); // js
  // console.log(path.parse(route).base); // example.js

  if (path.parse(route).name === 'index') {
    route = '';
  } else {
    route = path.parse(route).name;
  }

  app.use(`/${route}`, require(`./routes/${route}`));
});

const port = process.env.PORT || 1400;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
