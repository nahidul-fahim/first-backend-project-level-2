import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// this router function will call the controller function
router.post("/create-student", StudentControllers.createStudent)