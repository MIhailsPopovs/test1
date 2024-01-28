"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCandidate_joi_1 = require("./ServiceCandidate.joi");
exports.ServiceCandidateDeleteEventPayloadJoi = {
    serviceCandidate: Joi.object(ServiceCandidate_joi_1.ServiceCandidateJoi),
};
//# sourceMappingURL=ServiceCandidateDeleteEventPayload.joi.js.map