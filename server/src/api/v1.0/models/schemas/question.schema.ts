/* -------------------------------------------------------------------------- */
/*								   imports								  */
/* -------------------------------------------------------------------------- */
import mongoose from 'mongoose';
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*								   schema								   */
/* -------------------------------------------------------------------------- */
const Schema = new mongoose.Schema({
	body: {
		type: String,
		required: true,
		unique: false,
		default: '',
	},
	answered: {
		type: Boolean,
		required: true,
		unique: false,
		default: false,
	},
	isCorrect: {
		type: Boolean,
		required: true,
		unique: false,
		default: false,
	},
	type: {
		type: String,
		required: true,
		unique: false,
		default: 'multiple choice',
	},
	TopicId: {
		type: String,
		required: false,
        default:''
	},
	examId: {
		type: String,
		required: false,
        default:''
	},
	marks: {
		type: Number,
		required: true,
		unique: false,
		default: 0,
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
