/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {moduleSchema} from './schemas'
import {moduleInterface} from '../../../types/interfaces'

 class ModuleModel extends Model{
  	constructor(){
		super('Module', moduleSchema)		
	}

	public async addModule(module:moduleInterface):Promise<Boolean>{
		if(await this.exists('code', module.code)==true)return false
		if(await this.exists('name', module.name)==true)return false
		this.save(module)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getModule(key:any,value:any):Promise<moduleInterface>{
		return await this.get(key,value)
	}

	public async editModule(module:moduleInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Module= await this.getModule('_id', id)
		Module.name=module.name
		Module.description=module.description
		Module.code=module.code
		this.save(Module)
		return true
	}

	public async deleteModule(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new ModuleModel