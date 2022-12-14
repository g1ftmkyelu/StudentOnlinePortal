
/* -------------------------------------------------------------------------- */
/*								   imports								  */
/* -------------------------------------------------------------------------- */
import mongoose from 'mongoose'
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*								   schema								   */
/* -------------------------------------------------------------------------- */
const Schema = new mongoose.Schema({
	
    studentId: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
	examId: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
    tally: [{
		type: Boolean,
		required: true,
		unique: false,
		default: false,
	}]
    
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
