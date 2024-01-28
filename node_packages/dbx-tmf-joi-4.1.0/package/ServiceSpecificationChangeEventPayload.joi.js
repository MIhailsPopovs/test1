"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceSpecification_joi_1 = require("./ServiceSpecification.joi");
exports.ServiceSpecificationChangeEventPayloadJoi = {
    serviceSpecification: Joi.object(ServiceSpecification_joi_1.ServiceSpecificationJoi),
};
//# sourceMappingURL=ServiceSpecificationChangeEventPayload.joi.js.map