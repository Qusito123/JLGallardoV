"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materialController_1 = __importDefault(require("../controller/materialController"));
class MaterialRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', materialController_1.default.listar);
        this.router.get('/:id', materialController_1.default.listarUno);
    }
}
const materialRoutes = new MaterialRoutes();
exports.default = materialRoutes.router;
