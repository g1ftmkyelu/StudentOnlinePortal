import {Controller} from '../../../types/classes'
import scoreModel from '../models/score.model'
import {Request, Response, NextFunction} from 'express'

class ScoreController extends Controller{
	public async getAll(req:Request, res:Response){		
		const scores = await scoreModel.Index() 
		return res.status(200).json({result:true, message:scores})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const scores = await scoreModel.getScore(key,value) 
            return res.status(200).json({result:true, message:scores})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await scoreModel.addScore(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the score'})
			return res.status(200).json({result:true, message:'score added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await scoreModel.editScore(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the score'})
			return res.status(200).json({result:true, message:'score edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await scoreModel.deleteScore(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the score'})
			return res.status(200).json({result:true, message:'score deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default ScoreController