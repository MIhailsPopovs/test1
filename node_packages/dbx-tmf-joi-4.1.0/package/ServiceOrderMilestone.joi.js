"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderMilestoneJoi = void 0;
const Joi = require("joi");
const ServiceOrderItemRef_joi_1 = require("./ServiceOrderItemRef.joi");
exports.ServiceOrderMilestoneJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderMilestone'),
    description: Joi.string(),
    id: Joi.string(),
    message: Joi.string(),
    milestoneDate: Joi.date(),
    name: Joi.string(),
    serviceOrderItem: Joi.array().items(Joi.object(ServiceOrderItemRef_joi_1.ServiceOrderItemRefJoi)),
    status: Joi.string(),
};
//# sourceMappingURL=ServiceOrderMilestone.joi.js.map