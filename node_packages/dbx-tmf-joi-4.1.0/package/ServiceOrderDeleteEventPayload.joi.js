"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceOrder_joi_1 = require("./ServiceOrder.joi");
exports.ServiceOrderDeleteEventPayloadJoi = {
    serviceOrder: Joi.object(ServiceOrder_joi_1.ServiceOrderJoi),
};
//# sourceMappingURL=ServiceOrderDeleteEventPayload.joi.js.map