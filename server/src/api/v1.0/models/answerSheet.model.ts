/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {answerSheetSchema} from './schemas'
import {answerSheetInterface} from '../../../types/interfaces'

 class AnswerSheetModel extends Model{
 constructor(){
		super('AnswerSheet', answerSheetSchema)		
	}

	public async addAnswerSheet(answersheet:answerSheetInterface): Promise<Boolean>{
		if(await this.exists('studentId', answersheet.studentId)==true && await this.exists('examId', answersheet.examId)==true)return false
		this.save(answersheet)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getAnswerSheet(key:any,value:any):Promise<answerSheetInterface>{
		return await this.get(key,value)
	}

	public async editAnswerSheet(answerSheet:answerSheetInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const AnswerSheet= await this.getAnswerSheet('_id', id)
		AnswerSheet.studentId=answerSheet.studentId
        AnswerSheet.examId=answerSheet.examId
        AnswerSheet.tally=answerSheet.tally
		this.save(AnswerSheet)
		return true
	}

	public async deleteAnswerSheet(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new AnswerSheetModel