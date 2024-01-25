"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var app = (0, express_1.default)();
// app.use(express.json());
app.use((0, cors_1.default)({ origin: "http://localhost:".concat(PORT) }));
app.use(express_1.default.static('./dist/client'));
app.use(express_1.default.urlencoded({ extended: false })); // parse form data
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT, "..."));
});
