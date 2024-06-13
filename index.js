import express from 'express';
import mongoose from 'mongoose';
import { connectMongoose } from './config/mongooseConfig.js';
import doctorRouter from './routes/doctor.routes.js';
import patientRouter from './routes/patient.routes.js';
import reportRouter from './routes/report.routes.js';

// create server
const server = express();

server.use(express.json());

server.use('/hospital/doctor', doctorRouter);

server.use('/hospital/patients', patientRouter)

server.use('/hospital/reports', reportRouter)


// specify and listening to port
server.listen(3600, ()=>{
    console.log('Server is running at 3100');
    //connecting to mongodb
    connectMongoose();
})