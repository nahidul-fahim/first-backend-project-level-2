import Joi from 'joi';

// userName schema
const userNameValidationSchema = Joi.object({
    firstName: Joi.string().trim().required().regex(/^[A-Za-z]+$/).message('{#label} is not valid'),
    middleName: Joi.string().trim().allow(''),
    lastName: Joi.string().trim().required().regex(/^[A-Za-z]+$/).message('{#label} is not valid'),
});

// guardian schema
const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().trim().required(),
    fatherOccupation: Joi.string().trim().required(),
    fatherContactNo: Joi.string().trim().required(),
    motherName: Joi.string().trim().required(),
    motherOccupation: Joi.string().trim().required(),
    motherContactNo: Joi.string().trim().required(),
});

// local guardian schema
const localGuardianValidationSchema = Joi.object({
    name: Joi.string().trim().required(),
    occupation: Joi.string().trim().required(),
    contactNo: Joi.string().trim().required(),
    address: Joi.string().trim().required(),
});

// student schema
const studentValidationSchema = Joi.object({
    id: Joi.string().trim().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female').required().messages({
        'any.only': '{#label} is not a valid gender',
    }),
    dateOfBirth: Joi.string().trim().allow(''),
    email: Joi.string().trim().email().required().messages({
        'string.email': '{#label} is not valid',
    }),
    contactNo: Joi.string().trim().required(),
    emergencyContactNo: Joi.string().trim().required(),
    bloodGroup: Joi.string().trim().valid('A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'AB-', 'O-').messages({
        'any.only': '{#label} is not a valid blood group',
    }),
    presentAddress: Joi.string().trim().required(),
    permanentAddress: Joi.string().trim().required(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImg: Joi.string().trim().allow(''),
    isActive: Joi.string().valid('active', 'blocked').default('active').messages({
        'any.only': '{#label} is not a valid status',
    }),
});

export default studentValidationSchema;