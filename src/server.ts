require('dotenv/config');

import express from 'express';
import { errors } from "celebrate";
import { routes } from "./routes/Routes";
import {connectToDatabase} from './database/Database'

connectToDatabase();

const app = express();
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(process.env.PORT || 3333);
console.log('\n 🔥 server is runnning on port '+process.env.PORT)  

    

