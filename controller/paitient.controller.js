import mongoose from "mongoose";
import PatientRepository from "../repository/patient.repository.js";
import { PatientModel } from "../Schema/patient.schema.js";

export default class PatientController{

    constructor(){
        this.patientRepository = new PatientRepository();
    }

    async register(req, res, next){
        const { name, phone} = req.body;
        try{
            const patient = new PatientModel({name, phone});
            await this.patientRepository.register(patient);
            res.status(201).send(patient);
        }catch(err){
            console.log(err);
        }
    }
}