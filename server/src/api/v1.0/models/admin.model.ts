/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {adminSchema} from './schemas'
import {adminInterface} from '../../../types/interfaces'

 class AdminModel extends Model{
  	constructor(){
		super('Admin', adminSchema)		
	}

	public async addAdmin(admin:adminInterface): Promise<Boolean>{
		if(await this.exists('name', admin.name)==true && await this.exists('email', admin.email)==true && await this.exists('phoneNumber', admin.phoneNumber)==true)return false
		this.save(admin)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getAdmin(key:any,value:any):Promise<adminInterface>{
		return await this.get(key,value)
	}

	public async checkIfAdminExists(key:any,value:any):Promise<boolean>{
		if (await this.exists(key,value)==false)return false
		return true
	}

	public async editAdmin(admin:adminInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Admin= await this.getAdmin('_id', id)
		Admin.name=admin.name
        Admin.password=admin.password
        Admin.email=admin.email
        Admin.phoneNumber=admin.phoneNumber
		this.save(Admin)
		return true
	}

	public async deleteAdmin(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new AdminModel