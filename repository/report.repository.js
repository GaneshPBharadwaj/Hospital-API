import mongoose from "mongoose";
import { ReportModel } from "../Schema/report.schema.js";

export default class ReportRepository{

    async createReport(report){
        try{
            const newReport = new ReportModel(report);
            await newReport.save();
            return newReport;
        }catch(err){
            console.log(err);
        }
    }

    async allReport(patientId){
        try{
            const reports = await ReportModel.find({patient: patientId});
            console.log(reports);
            return reports;
        }catch(err){
            console.log(err);
        }
    }

    async reportByStatus(status){
        try{
            const reports = await ReportModel.find({status: status});
            return reports;
        }catch(err){
            console.log(err);
        }
    }
}