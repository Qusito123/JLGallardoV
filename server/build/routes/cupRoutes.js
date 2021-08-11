"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cupController_1 = __importDefault(require("../controller/cupController"));
class CupRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cupController_1.default.listar);
        this.router.get('/:id', cupController_1.default.listarUno);
        this.router.get('/tipo/:tipo', cupController_1.default.listarByTipo);
        this.router.post('/', cupController_1.default.crear);
        this.router.put('/:id', cupController_1.default.editar);
        this.router.delete('/:id', cupController_1.default.eliminar);
    }
}
const cupRoutes = new CupRoutes();
exports.default = cupRoutes.router;
