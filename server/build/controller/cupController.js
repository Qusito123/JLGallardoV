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
class CupController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT c.id_cup, t.name_type, cl.name_color, c.dimentions_cup, c.capacity_cup, c.model_cup, m.name_material FROM cup c INNER JOIN cup_type t ON t.id_type = c.id_type INNER JOIN color cl ON cl.id_color = c.id_color INNER JOIN material m ON m.id_material = c.id_material', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM cup WHERE id_cup = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({
                        message: 'Cup not found.'
                    });
                }
            });
        });
    }
    listarByTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo } = req.params;
            yield database_1.default.query('SELECT * FROM cup WHERE id_type = ?', [tipo], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({
                        message: 'Cup type not found.'
                    });
                }
            });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cup set ?', [req.body]);
            res.json({
                text: 'Cup created'
            });
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cup set ? WHERE id_cup = ?', [req.body, id], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'Cup updated ' + id
            });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM cup WHERE id_cup = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: 'Cup succesfully deleted.' });
            });
        });
    }
}
const cupController = new CupController();
exports.default = cupController;
