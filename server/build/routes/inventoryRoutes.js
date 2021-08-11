"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventoryController_1 = __importDefault(require("../controller/inventoryController"));
class InventoryRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', inventoryController_1.default.listar);
        this.router.get('/:id', inventoryController_1.default.listarUno);
        this.router.get('/tipo/:tipo', inventoryController_1.default.listarByTipo);
        this.router.put('/:id', inventoryController_1.default.editarCantidad);
        this.router.delete('/:id', inventoryController_1.default.eliminar);
    }
}
const inventoryRoutes = new InventoryRoutes();
exports.default = inventoryRoutes.router;
