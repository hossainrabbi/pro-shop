import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import productRoute from './routes/productRoute.js';

dotenv.config();
colors.enable();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/products', productRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`.yellow.bold)
);
