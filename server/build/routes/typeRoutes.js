"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeController_1 = __importDefault(require("../controller/typeController"));
class TypeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', typeController_1.default.listar);
        this.router.get('/:id', typeController_1.default.listarUno);
    }
}
const typeRoutes = new TypeRoutes();
exports.default = typeRoutes.router;
