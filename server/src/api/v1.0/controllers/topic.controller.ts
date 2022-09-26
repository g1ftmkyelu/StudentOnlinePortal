import {Controller} from '../../../types/classes'
import topicModel from '../models/topic.model'
import {Request, Response, NextFunction} from 'express'

class TopicController extends Controller{
	public async getAll(req:Request, res:Response){		
		const topics = await topicModel.Index() 
		return res.status(200).json({result:true, message:topics})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const topics = await topicModel.getTopic(key,value) 
            return res.status(200).json({result:true, message:topics})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await topicModel.addTopic(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the topic'})
			return res.status(200).json({result:true, message:'topic added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await topicModel.editTopic(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the topic'})
			return res.status(200).json({result:true, message:'topic edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await topicModel.deleteTopic(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the topic'})
			return res.status(200).json({result:true, message:'topic deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default TopicController