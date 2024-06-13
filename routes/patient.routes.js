import express from 'express';
import PatientController from '../controller/paitient.controller.js';
import ReportController from '../controller/report.controller.js';
import jwtAuth from '../config/jwt.middleware.js';

// Initialize Express router.

const patientRouter = express.Router();

const patientController = new PatientController();
const reportController = new ReportController();

// All the paths to controller methods.

patientRouter.post('/register', jwtAuth, (req, res, next)=>{
    patientController.register(req, res, next)
});

patientRouter.post('/:id/create_report', jwtAuth, (req, res, next)=>{
    reportController.createReport(req, res, next)
});

patientRouter.get('/:id/all_report', (req, res, next)=>{
    reportController.allReport(req, res, next)
})

export default patientRouter;