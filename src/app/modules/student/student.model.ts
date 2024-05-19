import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";
import validator from "validator";

// userName schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true, // this will remove unnecessary space from beginning and ending of name
    required: [true, 'First name is required'],
    // custom made validation function
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1) //Nahid
        return firstNameStr === value; // if value is same as firstNameStr format, then it will return. Otherwise, it won't.
      },
      message: '{VALUE} is not in capitalized format'
    }
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
    validate: {
      // here doing the validation using 'Validator NPM' package
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid'
    }
  },
});

// guardian schema
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father\'s name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father\'s occupation is required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Father\'s contact number is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother\'s name is required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother\'s occupation is required'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Mother\'s contact number is required'],
  },
});

// local guardian schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Local guardian\'s name is required'],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Local guardian\'s occupation is required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Local guardian\'s contact number is required'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'Local guardian\'s address is required'],
  },
});

// student schema
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Student ID is required'],
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Email is required'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid'
    }
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    trim: true,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "B+", "O+", "AB+", "A-", "B-", "AB-", "O-"],
      message: '{VALUE} is not a valid blood group',
    },
    trim: true,
  },
  presentAddress: {
    type: String,
    trim: true,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    trim: true,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },
  profileImg: {
    type: String,
    trim: true,
  },
  isActive: {
    type: String,
    enum: {
      values: ["active", "blocked"],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
  },
});

// creating model
export const StudentModel = model<Student>("Student", studentSchema);