import {Controller} from '../../../types/classes'
import adminModel from '../models/admin.model'
import {Request, Response, NextFunction} from 'express'
import Bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

class AdminController extends Controller{
	public async getAll(req:Request, res:Response){		
		const admins = await adminModel.Index() 
		return res.status(200).json({result:true, message:admins})		
	}

	public async getOne(req:Request, res:Response, next:NextFunction){	
		try{
            const {key, value}=req.params
			const admins = await adminModel.getAdmin(key,value) 
            return res.status(200).json({result:true, message:admins})	
		} catch (error) {
			next(error)
		}
	}

	public async create(req:Request, res:Response, next:NextFunction){
	
		let admin=req.body
		const salt=await Bcrypt.genSalt()
		const hashedPassword=await Bcrypt.hash(admin.password, salt)
		admin.password=hashedPassword
		if(await adminModel.addAdmin(admin)==false)
			return res.status(500).json({result:true, message:'failed to add the admin'})
			return res.status(200).json({result:true, message:'admin added successfully'})
	}

	public async update(req:Request, res:Response, next:NextFunction){
		try{	
			if(await adminModel.editAdmin(req.body, req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to edit the admin'})
			return res.status(200).json({result:true, message:'admin edited successfully'})
		} catch (error) {
			next(error)
		}
	}

	public async login(req:Request, res:Response, next:NextFunction){	
		try{
            const {name, password}=req.body
			const user=await adminModel.getAdmin("name", name)
			if(await adminModel.checkIfAdminExists("name", name)==false){
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

	public async delete(req:Request, res:Response, next:NextFunction){
		try{
			if(await adminModel.deleteAdmin(req.params.id)==false)
			return res.status(500).json({result:true, message:'failed to delete the admin'})
			return res.status(200).json({result:true, message:'admin deleted successfully'})
		} catch (error) {
			next(error)
		}
	}

}

export default AdminController