import StudentModel from '../models/student.js';

export const getAllStudents = async (req, res) => {
  const resp = await StudentModel.find();
  return res.status(200).json(resp);
}

export const getStudentById = async (req, res) => {
  const id = req.params.id;
  const student = StudentModel.findById(id).then((student) => {
    res.status(200).send(student);
  });
}

export const addStudent = async (req, res) => {
  const student = req.body;

  if (student.name === "" || student.rollNo === "" || student.department === "" || student.age === "") {
    return res.status(401).send({ msg: "Enter the all details...!" });
  }
  const studentModel = new StudentModel(student);
  studentModel.save();
  return res.status(201).send(studentModel);
}

export const updateStudentInfo = async (req, res) => {
  const id = req.params.id;
  const student = req.body;
  res.send(`Student with id: ${id} updated`);
}

export const deleteStudent = async (req, res) => {
  const id = req.params.id;
  const resp = await StudentModel.deleteOne({ _id: id });
  res.status(200).send(resp);
}

export const searchStudent = async (req, res) => {
  const queryText = req.params.queryText;
  console.log(queryText);

  if (!queryText) {
    return res.status(400).json({ error: 'Query text is required' });
  }

  try {
    let students;
    // Check if the queryText is a number (considering it as rollNo)
    if (!isNaN(queryText)) {
      // Search for students by rollNo
      students = await StudentModel.find({ rollNo: queryText });
    } else {
      // Search for students by name
      students = await StudentModel.find({
        name: { $regex: queryText, $options: 'i' } // Case-insensitive substring search by name
      });
    }

    // If no students are found
    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found' });
    }

    // If students are found, return them
    res.status(200).json({ message: 'Students found', students: students });
  } catch (error) {
    // If an error occurs during the search
    console.error('Error searching for students:', error);
    res.status(500).json({ error: 'An error occurred while searching for students' });
  }
}