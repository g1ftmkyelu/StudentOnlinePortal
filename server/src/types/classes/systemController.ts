import Service from './systemService'
class Controller{
	private services:Service[]

	constructor(){
		this.services=[]
	}

	public getServices():Service[]{
		return this.services
	}

	public setServices(services:Service[]=[]){
		this.services=services
	}
}

export default Controller