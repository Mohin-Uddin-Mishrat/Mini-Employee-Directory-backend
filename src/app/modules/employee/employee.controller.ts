import httpStatus from "http-status";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import { employee_services } from "./employee.service";

const create_employee = catchAsync(async (req, res) => {
    const result = await employee_services.create_employee_into_db(req.body);

    manageResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Employee created successfully.",
        data: result
    });
});

const get_all_employees = catchAsync(async (_req, res) => {
    const result = await employee_services.get_all_employees_from_db();

    manageResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Employees fetched successfully.",
        data: result
    });
});

const update_employee = catchAsync(async (req, res) => {
    const result = await employee_services.update_employee_into_db(req.params.id, req.body);

    manageResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Employee updated successfully.",
        data: result
    });
});

const delete_employee = catchAsync(async (req, res) => {
    const result = await employee_services.delete_employee_from_db(req.params.id);

    manageResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Employee deleted successfully.",
        data: result
    });
});

export const employee_controllers = {
    create_employee,
    get_all_employees,
    update_employee,
    delete_employee
};
