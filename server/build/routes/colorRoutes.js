"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const colorController_1 = __importDefault(require("../controller/colorController"));
class ColorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', colorController_1.default.listar);
        this.router.get('/:id', colorController_1.default.listarUno);
    }
}
const colorRoutes = new ColorRoutes();
exports.default = colorRoutes.router;
