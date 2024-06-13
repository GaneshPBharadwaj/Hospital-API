import express from 'express';
import ReportController from '../controller/report.controller.js';

// Initialize Express router.

const reportRouter = express.Router();

const reportController = new ReportController();

// All the paths to controller methods.

reportRouter.get('/:status', (req, res, next)=>{
    reportController.reportByStatus(req, res, next)
});

export default reportRouter;