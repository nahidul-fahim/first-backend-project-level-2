import { TStudent } from "./student.interface";
import { Student } from "./student.model";

// create a student
const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await Student.create(studentData); // built in static method

  const student = new Student(studentData); // create an instance

  if (await student.isUserExists(studentData.id)) {
    throw new Error('User already exists.')
  };

  

  student.isUserExists

  const result = await student.save(); // built in instance method

  return result;
};

// get all students from DB
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

// get single student from DB
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
