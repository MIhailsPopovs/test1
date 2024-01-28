"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCandidate_joi_1 = require("./ServiceCandidate.joi");
exports.ServiceCandidateCreateEventPayloadJoi = {
    serviceCandidate: Joi.object(ServiceCandidate_joi_1.ServiceCandidateJoi),
};
//# sourceMappingURL=ServiceCandidateCreateEventPayload.joi.js.map