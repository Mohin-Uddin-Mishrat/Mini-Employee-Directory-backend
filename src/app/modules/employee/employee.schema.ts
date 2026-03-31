import { model, Schema } from "mongoose";
import { TEmployee } from "./employee.interface";

const employeeSchema = new Schema<TEmployee>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    department: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true }
}, {
    versionKey: false,
    timestamps: true
});

export const Employee_Model = model("employee", employeeSchema);
