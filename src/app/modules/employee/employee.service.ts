import { AppError } from "../../utils/app_error";
import { Employee_Model } from "./employee.schema";
import { TEmployee, TUpdateEmployee } from "./employee.interface";

const create_employee_into_db = async (payload: TEmployee) => {
    const result = await Employee_Model.create(payload);
    return result;
};

const get_all_employees_from_db = async () => {
    const result = await Employee_Model.find().sort({ createdAt: -1 });
    return result;
};

const update_employee_into_db = async (id: string, payload: TUpdateEmployee) => {
    const result = await Employee_Model.findByIdAndUpdate(
        id,
        payload,
        { new: true, runValidators: true }
    );

    if (!result) {
        throw new AppError("Employee not found!", 404);
    }

    return result;
};

const delete_employee_from_db = async (id: string) => {
    const result = await Employee_Model.findByIdAndDelete(id);

    if (!result) {
        throw new AppError("Employee not found!", 404);
    }

    return result;
};

export const employee_services = {
    create_employee_into_db,
    get_all_employees_from_db,
    update_employee_into_db,
    delete_employee_from_db
};
