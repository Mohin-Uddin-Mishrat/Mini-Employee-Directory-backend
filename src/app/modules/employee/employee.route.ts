import { Router } from "express";
import RequestValidator from "../../middlewares/request_validator";
import { employee_controllers } from "./employee.controller";
import { employee_validations } from "./employee.validation";

const employeeRoute = Router();

employeeRoute.post(
    "/",
    RequestValidator(employee_validations.create_employee),
    employee_controllers.create_employee
);

employeeRoute.get(
    "/",
    employee_controllers.get_all_employees
);

employeeRoute.put(
    "/:id",
    RequestValidator(employee_validations.update_employee),
    employee_controllers.update_employee
);

employeeRoute.delete(
    "/:id",
    employee_controllers.delete_employee
);

export default employeeRoute;
