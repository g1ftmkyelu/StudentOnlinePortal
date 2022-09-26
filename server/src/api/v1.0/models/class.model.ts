/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {classSchema} from './schemas'
import {classInterface} from '../../../types/interfaces'

 class Class_Model extends Model{
  	constructor(){
		super('Class_', classSchema)		
	}

	public async addClass_(class_:classInterface): Promise<Boolean>{
		if(await this.exists('name', class_.name)==true)return false
		this.save(class_)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getClass_(key:any,value:any):Promise<classInterface>{
		return await this.get(key,value)
	}

	public async editClass_(class_:classInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Class_= await this.getClass_('_id', id)
		Class_.name=class_.name
        Class_.program=class_.program
        Class_.level=class_.level
        Class_.studentIds=class_.studentIds
		this.save(Class_)
		return true
	}

	public async deleteClass_(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new Class_Model