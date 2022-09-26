/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {questionSchema} from './schemas'
import {questionInterface} from '../../../types/interfaces'

 class QuestionModel extends Model{
  	constructor(){
		super('Question', questionSchema)		
	}

	public async addQuestion(question:questionInterface): Promise<Boolean>{
		if(await this.exists('body', question.body)==true && await this.exists('examId', question.examId)==true)return false
		this.save(question)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getQuestion(key:any,value:any):Promise<questionInterface>{
		return await this.get(key,value)
	}

	public async editQuestion(question:questionInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Question= await this.getQuestion('_id', id)
		Question.body=question.body
        Question.answered=question.answered
		Question.isCorrect=question.isCorrect
        Question.type=question.type
        Question.TopicId=question.TopicId
		Question.examId=question.examId
        Question.marks=question.marks
		this.save(Question)
		return true
	}

	public async deleteQuestion(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new QuestionModel