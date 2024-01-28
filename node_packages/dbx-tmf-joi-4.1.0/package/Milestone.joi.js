"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilestoneJoi = void 0;
const Joi = require("joi");
exports.MilestoneJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Milestone'),
    description: Joi.string(),
    id: Joi.string(),
    message: Joi.string(),
    milestoneDate: Joi.date(),
    name: Joi.string(),
    status: Joi.string(),
};
//# sourceMappingURL=Milestone.joi.js.map