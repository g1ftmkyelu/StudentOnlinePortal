/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {scoreSchema} from './schemas'
import {scoreInterface} from '../../../types/interfaces'

 class ScoreModel extends Model{
  	constructor(){
		super('Score', scoreSchema)		
	}

	public async addScore(score:scoreInterface): Promise<Boolean>{
		if(await this.exists('answerSheetId', score.answerSheetId)==false)return false
		this.save(score)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getScore(key:any,value:any):Promise<scoreInterface>{
		return await this.get(key,value)
	}

	public async editScore(score:scoreInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Score= await this.getScore('_id', id)
		Score.answerSheetId=score.answerSheetId
        Score.marks=score.marks
      
		this.save(Score)
		return true
	}

	public async deleteScore(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new ScoreModel