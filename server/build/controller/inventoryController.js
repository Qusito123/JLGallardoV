"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InventoryController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT i.id_inventory, i.id_type, c.name_type, i.quantity_inventory FROM inventory i INNER JOIN cup_type c ON i.id_type = c.id_type', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT i.id_inventory, i.id_type, c.name_type, i.quantity_inventory FROM inventory i INNER JOIN cup_type c ON i.id_type = c.id_type WHERE id_inventory=?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({
                        message: 'Inventory not found'
                    });
                }
            });
        });
    }
    listarByTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo } = req.params;
            yield database_1.default.query('SELECT * FROM inventory WHERE id_type=?', [tipo], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({
                        message: 'Inventory type not found'
                    });
                }
            });
        });
    }
    editarCantidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE inventory set ? WHERE id_inventory = ?', [req.body, id], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'Inventory updated ' + id
            });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM inventory WHERE id_inventory = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: 'Inventory succesfully deleted' });
            });
        });
    }
}
const inventoryController = new InventoryController();
exports.default = inventoryController;
