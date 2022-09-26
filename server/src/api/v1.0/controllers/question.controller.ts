import {Controller} from '../../../types/classes'
import questionModel from '../models/question.model'
import {Request, Response, NextFunction} from 'express'

class QuestionController extends Controller{
	public async getAll(req:Request, res:Response){		
		const questions = await questionModel.Index() 
		return res.status(200).json({result:true, message:questions})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const questions = await questionModel.getQuestion(key,value) 
            return res.status(200).json({result:true, message:questions})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await questionModel.addQuestion(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the question'})
			return res.status(200).json({result:true, message:'question added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await questionModel.editQuestion(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the question'})
			return res.status(200).json({result:true, message:'question edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await questionModel.deleteQuestion(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the question'})
			return res.status(200).json({result:true, message:'question deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default QuestionController