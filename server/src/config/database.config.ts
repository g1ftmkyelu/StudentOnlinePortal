/* eslint-disable no-negated-condition */
import {mongoose} from '../exports/packages'

function connectDatabase(dbString:string) {
	mongoose.Promise = global.Promise
	mongoose.connect(dbString, err => {
		if (!err) {
			console.log('MongoDB Connection Succeeded.')
		} else {
			console.log('Error in DB connection: ' + err)
		}
	})
}

export default connectDatabase
