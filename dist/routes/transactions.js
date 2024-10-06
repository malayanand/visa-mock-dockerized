"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// check health
router.get("/health", (req, res) => {
    res.send("Server is running!!");
});
router.get("/accounts", (req, res) => {
    res.send({ data: "Account information" });
});
exports.default = router;
