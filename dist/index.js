"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const db_1 = require("./db");
async function main() {
    try {
        await db_1.AppDataSource.initialize();
        console.log("Database Connected");
        app_1.default.listen(3000);
        console.log('Server is listening on port', 3000);
    }
    catch (error) {
        console.log(error);
    }
}
main();
//# sourceMappingURL=index.js.map