/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {programSchema} from './schemas'
import {programInterface} from '../../../types/interfaces'

 class ProgramModel extends Model{
  	constructor(){
		super('Program', programSchema)		
	}

	public async addProgram(program:programInterface):Promise<Boolean>{
		if(await this.exists('code', program.code)==true)return false
		if(await this.exists('name', program.name)==true)return false
		this.save(program)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getProgram(key:any,value:any):Promise<programInterface>{
		return await this.get(key,value)
	}

	public async editProgram(program:programInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Program= await this.getProgram('_id', id)
		Program.name=program.name
		Program.description=program.description
		Program.code=program.code
		Program.moduleIds=program.moduleIds
		this.save(Program)
		return true
	}

	public async deleteProgram(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new ProgramModel