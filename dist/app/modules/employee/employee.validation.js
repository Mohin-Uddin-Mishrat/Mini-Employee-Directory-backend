"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employee_validations = void 0;
const zod_1 = require("zod");
const create_employee = zod_1.z.object({
    name: zod_1.z.string({ message: "Name is required" }).min(1, "Name is required"),
    email: zod_1.z.string({ message: "Email is required" }).email(),
    department: zod_1.z.string({ message: "Department is required" }).min(1, "Department is required"),
    position: zod_1.z.string({ message: "Position is required" }).min(1, "Position is required")
});
const update_employee = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    email: zod_1.z.string().email().optional(),
    department: zod_1.z.string().min(1).optional(),
    position: zod_1.z.string().min(1).optional()
}).refine(payload => Object.keys(payload).length > 0, { message: "At least one field is required for update" });
exports.employee_validations = {
    create_employee,
    update_employee
};
