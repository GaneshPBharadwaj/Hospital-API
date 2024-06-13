import mongoose from "mongoose";
import { PatientModel } from "../Schema/patient.schema.js";

export default class PatientRepository{

    async register(user){
        try{
            const newPatient = new PatientModel(user);
            await newPatient.save();
            return newPatient;
        }catch(err){
            console.log(err);
        }
    }
}