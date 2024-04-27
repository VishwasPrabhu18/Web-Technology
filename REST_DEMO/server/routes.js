import express from 'express';
import StudentModel from './models/student.js';

const app = express();
const routes = express.Router();

routes.get('/students', async (req, res) => {
    const resp = await StudentModel.find();
    return res.status(200).json(resp);
});

routes.get("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = StudentModel.findById(id).then((student) => {
        res.status(200).send(student);
    });
});

routes.post("/students", (req, res) => {
    const student = req.body;

    const studentModel = new StudentModel(student);
    studentModel.save();
    res.status(201).send(studentModel);
});

routes.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = req.body;
    res.send(`Student with id: ${id} updated`);
});

routes.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Student with id: ${id} deleted`);
});

export default routes;