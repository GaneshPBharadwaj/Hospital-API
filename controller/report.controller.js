import ReportRepository from "../repository/report.repository.js";
import { ReportModel } from "../Schema/report.schema.js";

export default class ReportController{

    constructor(){
        this.reportRepository = new ReportRepository();
    }

    async createReport(req, res, next){

        const patientId = req.params.id;
        const reportData = req.body;

        try{

            const report = {
                patient: reportData.patient,
                doctor: reportData.doctor,
                status: reportData.status,
                Date: reportData.Date || new Date()
            };
            const newReport = await this.reportRepository.createReport(report);
            res.status(201).send(newReport)
        }catch(err){
            console.error(err);
        }
    }

    async allReport(req, res, next){

        const patientId = req.params.id;
        try{
            const allReport = await this.reportRepository.allReport(patientId);
            res.status(201).send(allReport);
        }catch(err){
            console.log(err)
        }
    }

    async reportByStatus(req, res, next){

        const status = req.params.status;
        try{

            const allReport = await this.reportRepository.reportByStatus(status);
            res.status(201).send(allReport);
            
        }catch(err){
            console.log(err)
        }
    }
}