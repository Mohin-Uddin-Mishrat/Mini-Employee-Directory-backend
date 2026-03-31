"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_route_1 = __importDefault(require("./app/modules/employee/employee.route"));
const appRouter = (0, express_1.Router)();
const moduleRoutes = [
    { path: "/employees", route: employee_route_1.default }
];
moduleRoutes.forEach(route => appRouter.use(route.path, route.route));
exports.default = appRouter;
