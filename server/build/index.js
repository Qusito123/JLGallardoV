"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const colorRoutes_1 = __importDefault(require("./routes/colorRoutes"));
const materialRoutes_1 = __importDefault(require("./routes/materialRoutes"));
const typeRoutes_1 = __importDefault(require("./routes/typeRoutes"));
const inventoryRoutes_1 = __importDefault(require("./routes/inventoryRoutes"));
const cupRoutes_1 = __importDefault(require("./routes/cupRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || '3000');
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/market/color', colorRoutes_1.default);
        this.app.use('/market/material', materialRoutes_1.default);
        this.app.use('/market/type', typeRoutes_1.default);
        this.app.use('/market/inventory', inventoryRoutes_1.default);
        this.app.use('/market/cup', cupRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
