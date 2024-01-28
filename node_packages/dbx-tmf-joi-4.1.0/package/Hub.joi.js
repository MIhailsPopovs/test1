"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubJoi = void 0;
const Joi = require("joi");
exports.HubJoi = {
    callback: Joi.string().uri().required(),
    id: Joi.string().forbidden().required(),
    query: Joi.string(),
};
//# sourceMappingURL=Hub.joi.js.map