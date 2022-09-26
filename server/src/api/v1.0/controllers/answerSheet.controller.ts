import {Controller} from '../../../types/classes'
import answerSheetModel from '../models/answerSheet.model'
import {Request, Response, NextFunction} from 'express'

class AnswerSheetController extends Controller{
	public async getAll(req:Request, res:Response){		
		const answersheets = await answerSheetModel.Index() 
		return res.status(200).json({result:true, message:answersheets})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const answersheets = await answerSheetModel.getAnswerSheet(key,value) 
            return res.status(200).json({result:true, message:answersheets})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await answerSheetModel.addAnswerSheet(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the answersheet'})
			return res.status(200).json({result:true, message:'answersheet added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await answerSheetModel.editAnswerSheet(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the answersheet'})
			return res.status(200).json({result:true, message:'answersheet edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await answerSheetModel.deleteAnswerSheet(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the answersheet'})
			return res.status(200).json({result:true, message:'answersheet deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default AnswerSheetController