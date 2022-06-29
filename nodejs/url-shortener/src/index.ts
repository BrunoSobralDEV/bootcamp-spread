import { URLController } from './controller/URLController';
import express from 'express';
import { MongoConnection } from './database/MongoConnection';

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();

// Shorten URL
api.post('/shorten', urlController.shorten);

// Redirect URL
api.get('/:hash', urlController.redirect);

api.listen(5000, () => console.log('http://localhost:5000'));