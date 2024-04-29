import express from 'express';
import StudentModel from '../models/student.js';
import { addStudent, deleteStudent, getAllStudents, getStudentById, searchStudent, updateStudentInfo } from '../controllers/controller.js';

const routes = express.Router();

routes.get("/", getAllStudents);
routes.get("/:id", getStudentById);
routes.post("/add", addStudent);
routes.put("/:id", updateStudentInfo);
routes.delete("/:id", deleteStudent);
routes.get("/search/:queryText", searchStudent);

export default routes;