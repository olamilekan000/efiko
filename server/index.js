import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import cors from 'cors'
import router from './routes'
import mongoose from 'mongoose'
import './passport'

mongoose.Promise = global.Promise
let mongodbUri = 'mongodb://@ds123444.mlab.com:23444/efiko'
mongoose.connect(mongodbUri,  { useNewUrlParser: true ,   auth: { user: 'Ola000', password: 'olamilekan123' }} );
mongoose.connection.once('open', () => { console.log('Now connected to the Database succesfully') })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const app = express()

app.set("json spaces", 4);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(cors());

app.use('/', router);

module.exports = app