import mongoose from 'mongoose'
/* -------------------------------------------------------------------------- */
/*								   schema								   */
/* -------------------------------------------------------------------------- */
const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: false,
		default: ''
	},
	description: {
		type: String,
		required: true,
		unique: false,
		default: ''
	},
	code: {
		type: String,
		required: true,
		unique: false,
		default: ''
	},
	
},
{
	timestamps:false
}
)
/* -------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------

/* -------------------------------------------------------------------------- */
/*								model export								*/
/* -------------------------------------------------------------------------- */
export default Schema
/* -------------------------------------------------------------------------- */