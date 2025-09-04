"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const court_1 = require("./entities/court");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: true,
    logging: true,
    entities: [court_1.Court],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=db.js.map