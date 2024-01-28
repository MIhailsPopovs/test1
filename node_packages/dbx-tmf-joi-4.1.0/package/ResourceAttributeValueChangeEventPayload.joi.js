"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Resource_joi_1 = require("./Resource.joi");
exports.ResourceAttributeValueChangeEventPayloadJoi = {
    resource: Joi.object(Resource_joi_1.ResourceJoi),
};
//# sourceMappingURL=ResourceAttributeValueChangeEventPayload.joi.js.map