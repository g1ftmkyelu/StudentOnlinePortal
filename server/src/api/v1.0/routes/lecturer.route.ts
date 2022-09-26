import {express} from '../../../exports/packages' 
import Controller from '../controllers/lecturer.controller'
import Router from '../../../types/interfaces/Routes'
import Authorize from '../middlewares/auth.middleware' 

class lecturerRoute implements Router{
	public path = `/lecturer`
	public router = express.Router()
	private controller=new Controller

	constructor(){
		this.intializeRoutes()
	}

	private intializeRoutes(){
		this.router.get(this.path, Authorize, this.controller.getAll)
		this.router.post(`${this.path}/login`,this.controller.login)
		this.router.post(this.path, this.controller.create)
		this.router.patch(`${this.path}/:id`, this.controller.update)
		this.router.delete(`${this.path}/:id`, this.controller.delete)
	}
    
}

export default lecturerRoute