import express from 'express';
import StudentModel from './models/student.js';

const app = express();
const routes = express.Router();

routes.get('/students', (req, res) => {
    StudentModel.find({}, (err, students) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(students);
    });
});

routes.get("/students/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Student with id: ${id}`);
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