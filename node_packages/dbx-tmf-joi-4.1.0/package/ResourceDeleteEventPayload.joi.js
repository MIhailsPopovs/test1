"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const Resource_joi_1 = require("./Resource.joi");
exports.ResourceDeleteEventPayloadJoi = {
    resource: Joi.object(Resource_joi_1.ResourceJoi),
};
//# sourceMappingURL=ResourceDeleteEventPayload.joi.js.map