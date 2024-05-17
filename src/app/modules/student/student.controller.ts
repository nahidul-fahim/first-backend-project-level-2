import { Request, Response } from "express";
import { StudentServices } from "./student.service";

// student creation controller
const createStudent = (async (req: Request, res: Response) => {
    try {
        // getting the data from client side by body
        const student = req.body;
        // then we will call the service function to send these data
        const result = await StudentServices.createStudentIntoDB(student);

        // now send the response to client side
        res.status(200).json({
            success: true,
            message: "New student is created successfully",
            data: result,
        })
    } catch (error) {
        console.log(error)
    }
})

export const StudentControllers = {
    createStudent,
};