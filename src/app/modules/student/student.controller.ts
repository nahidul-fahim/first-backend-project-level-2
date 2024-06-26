import { Request, Response } from "express";
import { StudentServices } from "./student.service";
// import studentValidationSchema from "./student.validation";
import { z } from "zod";
import studentValidationSchema from "./student.validation";

// student creation controller
const createStudent = async (req: Request, res: Response) => {
  try {

    // getting the data from client side by body
    const { student: studentData } = req.body;


    // data validation using zod
    const zodParseData = studentValidationSchema.parse(studentData)


    // data validation using Joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // then we will call the service function to send these data
    const result = await StudentServices.createStudentIntoDB(zodParseData);

    // error from Joi library
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "Something went wrong",
    //     error: error,
    //   })
    // }

    // now send the response to client side
    res.status(200).json({
      success: true,
      message: "New student is created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// get all students controller
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    // now send the response to client side
    res.status(200).json({
      success: true,
      message: "Student data got successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// get single student controller
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // now send the response to client side
    res.status(200).json({
      success: true,
      message: "Single student data is received successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};