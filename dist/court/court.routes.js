"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const court_controllers_1 = require("./court.controllers");
const multer_config_1 = require("../config/multer.config");
const router = (0, express_1.Router)();
router.get('/courts', court_controllers_1.getCourts);
router.get('/court/:id', court_controllers_1.getCourt);
router.post('/court', multer_config_1.upload.single("image_url"), court_controllers_1.createCourt);
router.put('/court/:id', multer_config_1.upload.single("image_url"), court_controllers_1.updateCourt);
router.delete('/court/:id', court_controllers_1.deleteCourt);
exports.default = router;
//# sourceMappingURL=court.routes.js.map