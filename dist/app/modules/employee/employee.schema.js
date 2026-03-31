"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee_Model = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    department: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true }
}, {
    versionKey: false,
    timestamps: true
});
exports.Employee_Model = (0, mongoose_1.model)("employee", employeeSchema);
