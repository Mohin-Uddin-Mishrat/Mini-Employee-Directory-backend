"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const request_validator_1 = __importDefault(require("../../middlewares/request_validator"));
const employee_controller_1 = require("./employee.controller");
const employee_validation_1 = require("./employee.validation");
const employeeRoute = (0, express_1.Router)();
employeeRoute.post("/", (0, request_validator_1.default)(employee_validation_1.employee_validations.create_employee), employee_controller_1.employee_controllers.create_employee);
employeeRoute.get("/", employee_controller_1.employee_controllers.get_all_employees);
employeeRoute.put("/:id", (0, request_validator_1.default)(employee_validation_1.employee_validations.update_employee), employee_controller_1.employee_controllers.update_employee);
employeeRoute.delete("/:id", employee_controller_1.employee_controllers.delete_employee);
exports.default = employeeRoute;
