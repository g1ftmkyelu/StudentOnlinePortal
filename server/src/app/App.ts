// Object orientel programming using C# kendall
import {express, cors} from '../exports/packages'
import Routes from '../types/interfaces/Routes'
import connectDatabase from '../config/database.config'
import opts from '../config/auth.config'
import { config } from 'dotenv'
import {auth} from 'express-openid-connect'
config({ path: `.env`})

class App {
	public app: express.Application
	public port: (string | number)
	public ConnectionString:string
    

	constructor(Routes: Routes[]=[]) {
		this.app = express()
		this.port = process.env.PORT || 4055
		this.ConnectionString = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/OSP'
        

		this.utilizePackages()
		this.connectDB()
		this.initializeRoutes(Routes)
	}

	private utilizePackages() {
		this.app.use(express.json())
		this.app.use(auth(opts))
		this.app.use(cors())
		this.app.use(express.static(__dirname + '/public/'))
		this.app.use('/public/uploads/profilepics/:any', express.static('uploads/profilepics'))
	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach(route => {
			this.app.use('/', route.router)
		})
	}

	private connectDB() {
		connectDatabase(this.ConnectionString)
	}

	public run() {
		this.app.listen(this.port, () => {
			console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`)
		})
	}
}

export default App