
/* -------------------------------------------------------------------------- */
/*								   imports								  */
/* -------------------------------------------------------------------------- */
import mongoose from 'mongoose'
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*								   schema								   */
/* -------------------------------------------------------------------------- */
const Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
	password: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: /@/,
	},

    phoneNumber: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
    
	file: {
		type: String,
		required: true,
		unique: false,
		default: 'http://localhost:7100/api/v1/lecturer/image/profile.png',
	},
},
{
	timestamps: false,
},
);
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*								model export								*/
/* -------------------------------------------------------------------------- */
export default Schema
/* -------------------------------------------------------------------------- */
