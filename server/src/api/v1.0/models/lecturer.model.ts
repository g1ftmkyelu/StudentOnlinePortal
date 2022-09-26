/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {lecturerSchema} from './schemas'
import {lecturerInterface} from '../../../types/interfaces'

 class LecturerModel extends Model{
  	constructor(){
		super('Lecturer', lecturerSchema)		
	}

	public async addLecturer(lecturer:lecturerInterface): Promise<Boolean>{
		//console.log(lecturer)
		//console.log(await this.exists('name', lecturer.name))
		if(await this.exists('name', lecturer.name)==true)return false
		if(await this.exists('email', lecturer.email)==true)return false
		Array.isArray(lecturer.moduleIds)
		
		await this.save(lecturer)
		return true	 
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getLecturer(key:any,value:any):Promise<lecturerInterface>{
		return await this.get(key,value)
	}

	public async checkIfLecturerExists(key:any,value:any):Promise<boolean>{
		if (await this.exists(key,value)==false)return false
		return true
	}

	public async editLecturer(lecturer:lecturerInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Lecturer= await this.getLecturer('_id', id)
		Lecturer.name=lecturer.name
        Lecturer.password=lecturer.password
        Lecturer.email=lecturer.email
        Lecturer.phoneNumber=lecturer.phoneNumber
		Lecturer.gender=lecturer.gender
        Lecturer.moduleIds=lecturer.moduleIds
		this.save(Lecturer)
		return true
	}

	public async deleteLecturer(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new LecturerModel