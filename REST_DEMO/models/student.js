import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    departmnet: {
        type: String,
        required: true
    },

    rollNo: {
        type: Number,
        required: true
    },

    age: {
        type: Number,
        required: true
    }
});

const StudentModel = mongoose.model('Student', studentSchema);

export default StudentModel;