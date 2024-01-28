"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const PhysicalResource_joi_1 = require("./PhysicalResource.joi");
exports.PhysicalResourceDeleteEventPayloadJoi = {
    physicalResource: Joi.object(PhysicalResource_joi_1.PhysicalResourceJoi),
};
//# sourceMappingURL=PhysicalResourceDeleteEventPayload.joi.js.map