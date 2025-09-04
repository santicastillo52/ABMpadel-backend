import * as express from 'express'
import * as morgan from 'morgan';
import * as cors from 'cors'
import * as dotenv from 'dotenv';
import courtRoutes from './court/court.routes'

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(courtRoutes);
dotenv.config();

export default app;