/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {model,Schema} from 'mongoose'
//import {Pagination} from '../../exports/packages' 
class systemModel{
	private collectionName:string
	private schema:Schema
	private modelInstance:any

	constructor(collectionName:string, schema:Schema){
		this.collectionName=collectionName
		this.schema=schema
		this.modelInstance=model(collectionName, schema)
//		this.schemaPlugin(Pagination)

		
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected schemaPlugin(plugin:any){
		this.schema.plugin(plugin)
	}

	protected async getAll():Promise<{}>{
		const allResources = await this.modelInstance.find().exec()
		return allResources
	}

	protected async  get(key:any, value:any):Promise<any>{
		const selectedResource = await this.modelInstance.findOne({ [key]:value }).exec()
		return selectedResource
	}

	protected async exists(key:any, value:any):Promise<Boolean>{
		console.log(await this.get(key,value))
		if (await this.get(key,value))return true
		return false
	}

	protected async save(resource:{}):Promise<Boolean>{
	try{
		const newReasource=new this.modelInstance(resource)
		newReasource.save()
		return true
	} catch (error) {	
		console.log((error as Error).message)	
		return false
	}
	}
	
	protected delete(id:string){
		this.modelInstance.findByIdAndDelete(id).exec()
	}
}

export default systemModel