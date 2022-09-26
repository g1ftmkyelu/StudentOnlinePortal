import {Controller} from '../../../types/classes'
import examModel from '../models/exam.model'
import {Request, Response, NextFunction} from 'express'

class ExamController extends Controller{
	public async getAll(req:Request, res:Response){		
		const exams = await examModel.Index() 
		return res.status(200).json({result:true, message:exams})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const exams = await examModel.getExam(key,value) 
            return res.status(200).json({result:true, message:exams})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await examModel.addExam(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the exam'})
			return res.status(200).json({result:true, message:'exam added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await examModel.editExam(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the exam'})
			return res.status(200).json({result:true, message:'exam edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await examModel.deleteExam(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the exam'})
			return res.status(200).json({result:true, message:'exam deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default ExamController