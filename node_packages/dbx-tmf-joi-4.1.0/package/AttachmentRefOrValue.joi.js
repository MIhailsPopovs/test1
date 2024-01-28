"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentRefOrValueJoi = void 0;
const Joi = require("joi");
const tools_1 = require("./tools");
const Quantity_joi_1 = require("./Quantity.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.AttachmentRefOrValueJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AttachmentRefOrValue'),
    attachmentType: Joi.string(),
    content: Joi.string(),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string().default(tools_1.generateId),
    lifecycleStatus: Joi.string(),
    mimeType: Joi.string(),
    name: Joi.string(),
    size: Joi.object(Quantity_joi_1.QuantityJoi),
    url: Joi.string().uri(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=AttachmentRefOrValue.joi.js.map