import {Controller} from '../../../types/classes'
import moduleModel from '../models/module.model'
import {Request, Response, NextFunction} from 'express'

class ModuleController extends Controller{
	public async getAll(req:Request, res:Response){		
		const modules = await moduleModel.Index() 
		return res.status(200).json({result:true, message:modules})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const modules = await moduleModel.getModule(key,value) 
            return res.status(200).json({result:true, message:modules})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	try{	
		if(await moduleModel.addModule(req.body)==false)
			return res.status(500).json({result:true, message:'failed to add the module'})
			return res.status(200).json({result:true, message:'module added successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await moduleModel.editModule(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the module'})
			return res.status(200).json({result:true, message:'module edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await moduleModel.deleteModule(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the module'})
			return res.status(200).json({result:true, message:'module deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default ModuleController