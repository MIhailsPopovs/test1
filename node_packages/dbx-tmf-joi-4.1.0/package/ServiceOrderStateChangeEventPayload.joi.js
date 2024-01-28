"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceOrder_joi_1 = require("./ServiceOrder.joi");
exports.ServiceOrderStateChangeEventPayloadJoi = {
    serviceOrder: Joi.object(ServiceOrder_joi_1.ServiceOrderJoi),
};
//# sourceMappingURL=ServiceOrderStateChangeEventPayload.joi.js.map