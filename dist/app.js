"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const court_routes_1 = require("./court/court.routes");
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(court_routes_1.default);
dotenv.config();
exports.default = app;
//# sourceMappingURL=app.js.map