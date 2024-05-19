import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";


// userName schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'This field is required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'This field is required'],
  },
});


// guardian schema
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'This field is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'This field is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'This field is required'],
  },
  motherName: {
    type: String,
    required: [true, 'This field is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'This field is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'This field is required'],
  },
});


// local guardian schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'This field is required'],
  },
  occupation: {
    type: String,
    required: [true, 'This field is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'This field is required'],
  },
  address: {
    type: String,
    required: [true, 'This field is required'],
  },
});

// student schema
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'This field is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'This field is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'This field is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "B+", "O+", "AB+", "A-", "B-", "AB-", "O-"],
      message: '{VALUE} is not valid'
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'This field is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'This field is required'],
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: 'active',
  },
});

// creating model
export const StudentModel = model<Student>("Student", studentSchema);
