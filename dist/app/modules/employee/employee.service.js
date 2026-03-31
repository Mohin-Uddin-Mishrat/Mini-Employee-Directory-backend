"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employee_services = void 0;
const app_error_1 = require("../../utils/app_error");
const employee_schema_1 = require("./employee.schema");
const create_employee_into_db = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_schema_1.Employee_Model.create(payload);
    return result;
});
const get_all_employees_from_db = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_schema_1.Employee_Model.find().sort({ createdAt: -1 });
    return result;
});
const update_employee_into_db = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_schema_1.Employee_Model.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    if (!result) {
        throw new app_error_1.AppError("Employee not found!", 404);
    }
    return result;
});
const delete_employee_from_db = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_schema_1.Employee_Model.findByIdAndDelete(id);
    if (!result) {
        throw new app_error_1.AppError("Employee not found!", 404);
    }
    return result;
});
exports.employee_services = {
    create_employee_into_db,
    get_all_employees_from_db,
    update_employee_into_db,
    delete_employee_from_db
};
