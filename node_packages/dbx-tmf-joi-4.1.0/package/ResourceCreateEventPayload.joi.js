"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const Resource_joi_1 = require("./Resource.joi");
exports.ResourceCreateEventPayloadJoi = {
    resource: Joi.object(Resource_joi_1.ResourceJoi),
};
//# sourceMappingURL=ResourceCreateEventPayload.joi.js.map