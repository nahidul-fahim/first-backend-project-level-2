import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();

// router to create a student
// this router function will call the controller function
router.post("/create-student", StudentControllers.createStudent); // now users have to hit the "/api/v1/students/create-student", then it will call the 'controller function' and controller will the 'service' function. Service function will query from the database.

// router to get all the students
router.get("/", StudentControllers.getAllStudents);

// router to get single student
router.get("/:studentId", StudentControllers.getSingleStudent);

export const StudentRoutes = router;
