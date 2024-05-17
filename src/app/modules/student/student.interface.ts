import { Schema, model, connect } from 'mongoose';

// guardian type
export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

// user name type
export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
}

// local guardian type
export type LocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

// student type
export type Student = {
    id: string;
    name: UserName;
    gender: "male" | "female";
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: "A+" | "B+" | "O+" | "AB+" | "A-" | "B-" | "AB-" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImg?: string;
    isActive: 'active' | 'blocked'
}