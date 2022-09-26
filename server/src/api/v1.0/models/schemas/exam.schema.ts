
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
	},Date: {
		type: Date,
		required: true,
		unique: false,
		default: '',
	},
    Semester: {
		type: Number,
		required: true,
		unique: false,
		default: '',
	},
    type: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
	moduleId: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
	Duration: {
		type: Number,
		required: true,
		unique: false,
		default: '',
	},
    lecturerId: {
		type: String,
		required: true,
		unique: false,
		default: '',
	}
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
