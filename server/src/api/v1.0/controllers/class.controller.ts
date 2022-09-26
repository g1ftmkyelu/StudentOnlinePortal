import {Controller} from '../../../types/classes'
import classModel from '../models/class.model'
import {Request, Response, NextFunction} from 'express'

class ClassController extends Controller{
	public async getAll(req:Request, res:Response){		
		const classs = await classModel.Index() 
		return res.status(200).json({result:true, message:classs})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const classs = await classModel.getClass_(key,value) 
            return res.status(200).json({result:true, message:classs})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await classModel.addClass_(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the class'})
			return res.status(200).json({result:true, message:'class added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await classModel.editClass_(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the class'})
			return res.status(200).json({result:true, message:'class edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await classModel.deleteClass_(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the class'})
			return res.status(200).json({result:true, message:'class deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default ClassController