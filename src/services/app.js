import http, { createServer } from 'http'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'


const mongouri = "mongodb://localhost:27017/sindu";
const port = 3000;

const app = express('', api)
const server = http.createServer(app)

mongoose.connect(mongoUri)
mongoose.Promise = Promise

 setImmediate(()=>{
    server.listening.port(()=>{
        console.log(`express is listening to the port ${port}`);
    })
   
})

export default app