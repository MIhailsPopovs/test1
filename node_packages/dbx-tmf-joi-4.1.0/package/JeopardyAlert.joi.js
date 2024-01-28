"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JeopardyAlertJoi = void 0;
const Joi = require("joi");
exports.JeopardyAlertJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('JeopardyAlert'),
    alertDate: Joi.date(),
    exception: Joi.string(),
    id: Joi.string(),
    jeopardyType: Joi.string(),
    message: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=JeopardyAlert.joi.js.map