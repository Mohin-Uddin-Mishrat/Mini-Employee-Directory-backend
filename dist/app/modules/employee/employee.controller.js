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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employee_controllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catch_async_1 = __importDefault(require("../../utils/catch_async"));
const manage_response_1 = __importDefault(require("../../utils/manage_response"));
const employee_service_1 = require("./employee.service");
const create_employee = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_service_1.employee_services.create_employee_into_db(req.body);
    (0, manage_response_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Employee created successfully.",
        data: result
    });
}));
const get_all_employees = (0, catch_async_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_service_1.employee_services.get_all_employees_from_db();
    (0, manage_response_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Employees fetched successfully.",
        data: result
    });
}));
const update_employee = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_service_1.employee_services.update_employee_into_db(req.params.id, req.body);
    (0, manage_response_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Employee updated successfully.",
        data: result
    });
}));
const delete_employee = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employee_service_1.employee_services.delete_employee_from_db(req.params.id);
    (0, manage_response_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Employee deleted successfully.",
        data: result
    });
}));
exports.employee_controllers = {
    create_employee,
    get_all_employees,
    update_employee,
    delete_employee
};
