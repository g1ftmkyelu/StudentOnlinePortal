import {Controller} from '../../../types/classes'
import answerModel from '../models/answer.model'
import {Request, Response, NextFunction} from 'express'

class AnswerController extends Controller{
	public async getAll(req:Request, res:Response){		
		const answers = await answerModel.Index() 
		return res.status(200).json({result:true, message:answers})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const answers = await answerModel.getAnswer(key,value) 
            return res.status(200).json({result:true, message:answers})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await answerModel.addAnswer(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the answer'})
			return res.status(200).json({result:true, message:'answer added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await answerModel.editAnswer(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the answer'})
			return res.status(200).json({result:true, message:'answer edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await answerModel.deleteAnswer(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the answer'})
			return res.status(200).json({result:true, message:'answer deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default AnswerController