"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const PhysicalResource_joi_1 = require("./PhysicalResource.joi");
exports.PhysicalResourceCreateEventPayloadJoi = {
    physicalResource: Joi.object(PhysicalResource_joi_1.PhysicalResourceJoi),
};
//# sourceMappingURL=PhysicalResourceCreateEventPayload.joi.js.map