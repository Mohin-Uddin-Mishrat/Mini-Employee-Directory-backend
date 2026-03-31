import { z } from "zod";

const create_employee = z.object({
    name: z.string({ message: "Name is required" }).min(1, "Name is required"),
    email: z.string({ message: "Email is required" }).email(),
    department: z.string({ message: "Department is required" }).min(1, "Department is required"),
    position: z.string({ message: "Position is required" }).min(1, "Position is required")
});

const update_employee = z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    department: z.string().min(1).optional(),
    position: z.string().min(1).optional()
}).refine(
    payload => Object.keys(payload).length > 0,
    { message: "At least one field is required for update" }
);

export const employee_validations = {
    create_employee,
    update_employee
};
