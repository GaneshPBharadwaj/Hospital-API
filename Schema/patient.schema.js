import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    phone: {
        type: Number,
        maxlength:10,
        required: true,
        unique:true,
    }
  }, {
      timestamps: true
});

export const PatientModel = mongoose.model('Patient', patientSchema);