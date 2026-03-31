import { Router } from 'express';
import employeeRoute from './app/modules/employee/employee.route';


const appRouter = Router();

const moduleRoutes = [
    { path: "/employees", route: employeeRoute }


];

moduleRoutes.forEach(route => appRouter.use(route.path, route.route));
export default appRouter;
