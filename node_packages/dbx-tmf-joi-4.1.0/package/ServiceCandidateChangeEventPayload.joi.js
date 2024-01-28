"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCandidate_joi_1 = require("./ServiceCandidate.joi");
exports.ServiceCandidateChangeEventPayloadJoi = {
    serviceCandidate: Joi.object(ServiceCandidate_joi_1.ServiceCandidateJoi),
};
//# sourceMappingURL=ServiceCandidateChangeEventPayload.joi.js.map