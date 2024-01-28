"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibilityUnavailabilityReasonJoi = void 0;
const Joi = require("joi");
exports.EligibilityUnavailabilityReasonJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('EligibilityUnavailabilityReason'),
    code: Joi.string(),
    label: Joi.string(),
};
//# sourceMappingURL=EligibilityUnavailabilityReason.joi.js.map