import {Controller} from '../../../types/classes'
import studentModel from '../models/student.model'
import {Request, Response, NextFunction} from 'express'
import Bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

class StudentController extends Controller{
	public async getAll(req:Request, res:Response){		
		const students = await studentModel.Index() 
		return res.status(200).json({result:true, message:students})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const students = await studentModel.getStudent(key,value) 
            return res.status(200).json({result:true, message:students})	
		} catch (error) {
			next(error)
		}
	}

	public async login(req:Request, res:Response, next:NextFunction){	
		try{
            const {name, password}=req.body
			const user=await studentModel.getStudent("name", name)
			if(await studentModel.checkIfStudentExists("name", name)==false){
				return	res.status(404).json({message:"user not found"})
			}else{
				if(await Bcrypt.compare(password, user.password)){
				const accessToken=JWT.sign(JSON.parse(JSON.stringify(user)), process.env.ACCESS_TOKEN_SECRET||"", {expiresIn: 604800})
				return	res.status(200).json({token:accessToken})
				}
				return	res.status(404).json({message:"user not logged in, wrong password"})
			} 
			
            
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
		let student=req.body
		const salt=await Bcrypt.genSalt()
		const hashedPassword=await Bcrypt.hash(student.password, salt)
		student.password=hashedPassword
		if(await studentModel.addStudent(student)==false)
			return res.status(500).json({result:true, message:'failed to add the student'})
			return res.status(200).json({result:true, message:'student added successfully'})
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await studentModel.editStudent(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the student'})
			return res.status(200).json({result:true, message:'student edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await studentModel.deleteStudent(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the student'})
			return res.status(200).json({result:true, message:'student deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default StudentController