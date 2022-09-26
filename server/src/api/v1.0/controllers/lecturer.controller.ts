import {Controller} from '../../../types/classes'
import lecturerModel from '../models/lecturer.model'
import {Request, Response, NextFunction} from 'express'
import Bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

class LecturerController extends Controller{
	public async getAll(req:Request, res:Response){		
		const lecturers = await lecturerModel.Index() 
		return res.status(200).json({result:true, message:lecturers})		
	}

	public async login(req:Request, res:Response, next:NextFunction){	
		try{
            const {name, password}=req.body
			const user=await lecturerModel.getLecturer("name", name)
			if(await lecturerModel.checkIfLecturerExists("name", name)==false){
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
		let lecturer=req.body
		const salt=await Bcrypt.genSalt()
		const hashedPassword=await Bcrypt.hash(lecturer.password, salt)
		lecturer.password=hashedPassword
		if(await lecturerModel.addLecturer(lecturer)==false)
			return res.status(500).json({result:true, message:'failed to add the lecturer'})
			return res.status(200).json({result:true, message:'lecturer added successfully'})
	}

	public async update(req:Request, res:Response){			
			if(await lecturerModel.editLecturer(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the lecturer'})
			return res.status(200).json({result:true, message:'lecturer edited successfully'})
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await lecturerModel.deleteLecturer(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the lecturer'})
			return res.status(200).json({result:true, message:'lecturer deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default LecturerController