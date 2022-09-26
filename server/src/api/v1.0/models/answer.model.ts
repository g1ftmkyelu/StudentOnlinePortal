/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {answerSchema} from './schemas'
import {answerInterface} from '../../../types/interfaces'

 class AnswerModel extends Model{
  	constructor(){
		super('Answer', answerSchema)		
	}

	public async addAnswer(answer:answerInterface): Promise<Boolean>{
		if(await this.exists('body', answer.body)==true && await this.exists('questionId', answer.questionId)==true)return false
		this.save(answer)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getAnswer(key:any,value:any):Promise<answerInterface>{
		return await this.get(key,value)
	}

	public async editAnswer(answer:answerInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Answer= await this.getAnswer('_id', id)
		Answer.body=answer.body
        Answer.isCorrect=answer.isCorrect
        Answer.questionId=answer.questionId
		this.save(Answer)
		return true
	}

	public async deleteAnswer(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new AnswerModel
