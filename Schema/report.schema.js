import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({

    doctor:{
        type: String,
        required: true,
        ref:'Doctor'
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Patient'
    },
    status:{
        type: String,
        required: true,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    },
    Date:{
        type: Date,
        default: Date.now,
        required:true
    }
},{
    timestamps:true
}
);

export const ReportModel = mongoose.model('Report', reportSchema);