"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Resource_joi_1 = require("./Resource.joi");
exports.ResourceStateChangeEventPayloadJoi = {
    resource: Joi.object(Resource_joi_1.ResourceJoi),
};
//# sourceMappingURL=ResourceStateChangeEventPayload.joi.js.map