"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceOrder_joi_1 = require("./ServiceOrder.joi");
exports.ServiceOrderAttributeValueChangeEventPayloadJoi = {
    serviceOrder: Joi.object(ServiceOrder_joi_1.ServiceOrderJoi),
};
//# sourceMappingURL=ServiceOrderAttributeValueChangeEventPayload.joi.js.map