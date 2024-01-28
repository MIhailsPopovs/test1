"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const PhysicalResource_joi_1 = require("./PhysicalResource.joi");
exports.PhysicalResourceStateChangeEventPayloadJoi = {
    physicalResource: Joi.object(PhysicalResource_joi_1.PhysicalResourceJoi),
};
//# sourceMappingURL=PhysicalResourceStateChangeEventPayload.joi.js.map