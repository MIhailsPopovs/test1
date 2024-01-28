"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const PhysicalResource_joi_1 = require("./PhysicalResource.joi");
exports.PhysicalResourceAttributeValueChangeEventPayloadJoi = {
    physicalResource: Joi.object(PhysicalResource_joi_1.PhysicalResourceJoi),
};
//# sourceMappingURL=PhysicalResourceAttributeValueChangeEventPayload.joi.js.map