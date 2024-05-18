import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

// create a student
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// get all students from DB
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get single student from DB
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
