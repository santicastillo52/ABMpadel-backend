import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv';

const app = express();

app.use(morgan('dev'));
app.use(cors());
dotenv.config();

export default app;