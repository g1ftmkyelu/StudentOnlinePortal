/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Model from '../../../types/classes/systemModel'
import {topicSchema} from './schemas'
import {topicInterface} from '../../../types/interfaces'

 class TopicModel extends Model{
  	constructor(){
		super('Topic', topicSchema)		
	}

	public async addTopic(topic:topicInterface):Promise<Boolean>{
		if(await this.exists('name', topic.name)==true)return false
		this.save(topic)
		return true		
	}

	public async Index():Promise<{}>{
		return await this.getAll()
	}

	public async getTopic(key:any,value:any):Promise<topicInterface>{
		return await this.get(key,value)
	}

	public async editTopic(topic:topicInterface, id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		const Topic= await this.getTopic('_id', id)
		Topic.name=topic.name
		Topic.description=topic.description
        Topic.moduleId=topic.moduleId
		this.save(Topic)
		return true
	}

	public async deleteTopic(id:string):Promise<Boolean>{
		if(await this.exists('_id', id)==false)return false
		this.delete(id)
		return true
	}

}

export default new TopicModel