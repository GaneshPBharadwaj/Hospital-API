import express from 'express';
import DoctorController from '../controller/doctor.controller.js';
import jwtAuth from '../config/jwt.middleware.js';

// Initialize Express router.

const doctorRouter = express.Router();

const doctorController = new DoctorController();

// All the paths to controller methods.

doctorRouter.post('/register', (req, res, next)=>{
    doctorController.register(req, res, next)
});

doctorRouter.post('/login', (req, res, next)=>{
    doctorController.login(req, res, next)
});

export default doctorRouter;