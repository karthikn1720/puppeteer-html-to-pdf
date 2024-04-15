"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/test').post((req, res) => {
    res.send("Hello");
});
exports.default = router;
