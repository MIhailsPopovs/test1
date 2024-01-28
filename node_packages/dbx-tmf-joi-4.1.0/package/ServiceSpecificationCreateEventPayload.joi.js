"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceSpecification_joi_1 = require("./ServiceSpecification.joi");
exports.ServiceSpecificationCreateEventPayloadJoi = {
    serviceSpecification: Joi.object(ServiceSpecification_joi_1.ServiceSpecificationJoi),
};
//# sourceMappingURL=ServiceSpecificationCreateEventPayload.joi.js.map