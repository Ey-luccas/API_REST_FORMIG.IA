"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World!\n");
});
app.listen(3000, "127.0.0.1", () => {
    console.log("Listening on https://localhost:127.0.0.1:3000");
});
