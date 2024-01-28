"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceSpecification_joi_1 = require("./ServiceSpecification.joi");
exports.ServiceSpecificationDeleteEventPayloadJoi = {
    serviceSpecification: Joi.object(ServiceSpecification_joi_1.ServiceSpecificationJoi),
};
//# sourceMappingURL=ServiceSpecificationDeleteEventPayload.joi.js.map