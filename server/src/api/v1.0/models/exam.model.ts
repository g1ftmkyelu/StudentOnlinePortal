/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {examSchema} from './schemas'
import {examInterface} from '../../../types/interfaces'

 class ExamModel extends Model{
  	constructor(){
		super('Exam', examSchema)		
	}

	public async addExam(exam:examInterface): Promise<Boolean>{
		if(await this.exists('name', exam.name)==true)return false
		this.save(exam)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getExam(key:any,value:any):Promise<examInterface>{
		return await this.get(key,value)
	}

	public async editExam(exam:examInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Exam= await this.getExam('_id', id)
        Exam.name=exam.name
		Exam.Date=exam.Date
        Exam.Semester=exam.Semester
        Exam.type=exam.type
        Exam.moduleId=exam.moduleId
        Exam.Duration=exam.Duration
        Exam.lecturerId=exam.lecturerId
		this.save(Exam)
		return true
	}

	public async deleteExam(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new ExamModel