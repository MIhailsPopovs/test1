"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderInformationRequiredEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceOrder_joi_1 = require("./ServiceOrder.joi");
exports.ServiceOrderInformationRequiredEventPayloadJoi = {
    serviceOrder: Joi.object(ServiceOrder_joi_1.ServiceOrderJoi),
};
//# sourceMappingURL=ServiceOrderInformationRequiredEventPayload.joi.js.map