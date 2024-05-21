import { Model } from "mongoose";

// guardian type
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

// user name type
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// local guardian type
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

// student type
export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "B+" | "O+" | "AB+" | "A-" | "B-" | "AB-" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
};

// for creating static
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}






// for creating instance

// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
