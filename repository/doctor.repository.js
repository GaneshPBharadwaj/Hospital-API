import mongoose from "mongoose";
import { DoctorModel } from "../Schema/doctor.schema.js";

export default class DoctorRepository{

    async register(user){
        try{
            const existingDoctor = await this.findByEmail(user.name);
            if (existingDoctor) {
                throw new Error("Doctor with this name already exists");
            }
            const newDoctor = new DoctorModel(user);
            await newDoctor.save();
            return newDoctor;
        }catch(err){
            console.log(err);
        }
    }

    async login(name, password){
        try{
           return await DoctorModel.findOne({name, password});
        }
        catch(err){
            console.log(err);
        }
    }

    async findByEmail(name) {
        try{
            return await DoctorModel.findOne({name});
        }catch(err){
            console.log(err);
        }
    }
}