"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderMilestoneEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceOrder_joi_1 = require("./ServiceOrder.joi");
exports.ServiceOrderMilestoneEventPayloadJoi = {
    serviceOrder: Joi.object(ServiceOrder_joi_1.ServiceOrderJoi),
};
//# sourceMappingURL=ServiceOrderMilestoneEventPayload.joi.js.map