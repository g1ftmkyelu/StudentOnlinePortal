
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
		index: false,
		default: '',
	},
	programId: {
		type: String,
		required: true,
		unique: false,
		index: false,
		default: '',
	},
	gender: {
		type: String,
		enum: ['male', 'female'],
		required: true,
		unique: false,
		index: false,
		default: '',
	},
	email: {
		type: String,
		required: true,
		unique: true,
		default: '',
		match: /@/,
	},
    phoneNumber: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
    
	password: {
		type: String,
		required: true,
		unique: true,
		default: '',
	},
	level: {
		type: String,
		enum: ['1', '2', '3', '4', '5', '6'],
		required: true,
		unique: false,
		index: false,
		default: '',
	},
	file: {
		type: String,
		required: true,
		unique: false,
		default: 'http://localhost:7100/api/v1/student/image/profile.png',
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
export default Schema;
/* -------------------------------------------------------------------------- */
