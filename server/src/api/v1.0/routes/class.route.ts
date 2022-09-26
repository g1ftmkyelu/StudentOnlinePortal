import {express} from '../../../exports/packages' 
import Controller from '../controllers/class.controller'
import Router from '../../../types/interfaces/Routes'

class classRoute implements Router{
	public path = `/class`
	public router = express.Router()
	private controller=new Controller

	constructor(){
		this.intializeRoutes()
	}

	private intializeRoutes(){
		this.router.get(this.path, this.controller.getAll)
		this.router.get(`${this.path}/:key/:value`, this.controller.getOne)
		this.router.post(this.path, this.controller.create)
		this.router.patch(`${this.path}/:id`, this.controller.update)
		this.router.delete(`${this.path}/:id`, this.controller.delete)
	}
    
}

export default classRoute