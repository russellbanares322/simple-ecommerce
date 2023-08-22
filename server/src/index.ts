import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from '../src/router/index';

const app = express();
dotenv.config()

app.use(cors({
    credentials: true
}))

const {PORT, MONGO_DB_URL} = process.env;

//Middleware
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser());
app.use((req, res, next) => {
    next()
})

//Server
const server = http.createServer(app);


//Mongo db connection
server.listen(PORT, () => {
    console.log("GG")
})

mongoose.Promise = Promise;
mongoose.connect(MONGO_DB_URL);
mongoose.connection.on('error', (error: Error) => console.log(error))

//Routers
app.use("/", router())