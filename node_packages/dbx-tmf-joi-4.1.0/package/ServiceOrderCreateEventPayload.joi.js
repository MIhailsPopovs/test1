"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceOrder_joi_1 = require("./ServiceOrder.joi");
exports.ServiceOrderCreateEventPayloadJoi = {
    serviceOrder: Joi.object(ServiceOrder_joi_1.ServiceOrderJoi),
};
//# sourceMappingURL=ServiceOrderCreateEventPayload.joi.js.map