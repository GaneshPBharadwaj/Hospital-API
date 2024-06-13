import jwt from 'jsonwebtoken';
import DoctorRepository from '../repository/doctor.repository.js';
import bcrypt from 'bcrypt';
import { DoctorModel } from '../Schema/doctor.schema.js';

export default class DoctorController{

    constructor(){
        this.doctorRepository = new DoctorRepository();
    }

    async register(req, res, next){
        const { name, password} = req.body;
        try{
            const hashedPassword = await bcrypt.hash(password, 12)
            const doctor = new DoctorModel({name, password: hashedPassword});
            await this.doctorRepository.register(doctor);
            res.status(201).send(doctor);
        }catch(err){
            console.log(err);
        }
    }

    async login(req, res, next){
        try{
            const doctor = await this.doctorRepository.findByEmail(req.body.name);
            if(!doctor){
                return res.status(400).send("Incorrect credentials")
            }else{
                const result = await bcrypt.compare(req.body.password, doctor.password);
                if(result){
                    const token = jwt.sign(
                        {
                            doctorID : doctor._id
                        },
                        'SDFYChgbjnebwfu',
                        {
                            expiresIn: '1h'
                        }
                    );
                    return res.status(200).send(token);
                }else{
                    return res.status(400).send('Incorrect Credentials');
                }
            }
        }catch(err){
            console.log(err)
        }
    }
}