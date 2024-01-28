"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderJeopardyAlertJoi = void 0;
const Joi = require("joi");
const ServiceOrderItemRef_joi_1 = require("./ServiceOrderItemRef.joi");
exports.ServiceOrderJeopardyAlertJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderJeopardyAlert'),
    alertDate: Joi.date(),
    exception: Joi.string(),
    id: Joi.string(),
    jeopardyType: Joi.string(),
    message: Joi.string(),
    name: Joi.string(),
    serviceOrderItem: Joi.array().items(Joi.object(ServiceOrderItemRef_joi_1.ServiceOrderItemRefJoi)),
};
//# sourceMappingURL=ServiceOrderJeopardyAlert.joi.js.map