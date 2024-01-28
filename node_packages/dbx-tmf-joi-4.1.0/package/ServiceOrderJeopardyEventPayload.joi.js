"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderJeopardyEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceOrder_joi_1 = require("./ServiceOrder.joi");
exports.ServiceOrderJeopardyEventPayloadJoi = {
    serviceOrder: Joi.object(ServiceOrder_joi_1.ServiceOrderJoi),
};
//# sourceMappingURL=ServiceOrderJeopardyEventPayload.joi.js.map