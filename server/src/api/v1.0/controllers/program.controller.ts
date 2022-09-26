import {Controller} from '../../../types/classes'
import programModel from '../models/program.model'
import {Request, Response, NextFunction} from 'express'

class ProgramController extends Controller{
	public async getAll(req:Request, res:Response){		
		const programs = await programModel.Index() 
		return res.status(200).json({result:true, message:programs})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const programs = await programModel.getProgram(key,value) 
            return res.status(200).json({result:true, message:programs})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await programModel.addProgram(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the program'})
			return res.status(200).json({result:true, message:'program added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await programModel.editProgram(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the program'})
			return res.status(200).json({result:true, message:'program edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await programModel.deleteProgram(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the program'})
			return res.status(200).json({result:true, message:'program deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default ProgramController