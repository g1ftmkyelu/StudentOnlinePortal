/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {studentSchema} from './schemas'
import {studentInterface} from '../../../types/interfaces'

 class StudentModel extends Model{
  	constructor(){
		super('Student', studentSchema)		
	}

	public async addStudent(student:studentInterface): Promise<Boolean>{
		if(await this.exists('name', student.name)==true && await this.exists('email', student.email)==true  && await this.exists('phoneNumber', student.phoneNumber))return false
		this.save(student)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getStudent(key:any,value:any):Promise<studentInterface>{
		return await this.get(key,value)
	}

	public async checkIfStudentExists(key:any,value:any):Promise<boolean>{
		if (await this.exists(key,value)==false)return false
		return true
	}

	public async editStudent(student:studentInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Student= await this.getStudent('_id', id)
		Student.name=student.name
        Student.programId=student.programId
        Student.gender=student.gender
        Student.phoneNumber=student.phoneNumber
        Student.password=student.password
        Student.level=student.level

		this.save(Student)
		return true
	}

	public async deleteStudent(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new StudentModel