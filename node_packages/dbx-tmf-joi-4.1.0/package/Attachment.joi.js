"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentJoi = void 0;
const Joi = require("joi");
const Quantity_joi_1 = require("./Quantity.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.AttachmentJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Attachment'),
    attachmentType: Joi.string(),
    content: Joi.string(),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    lifecycleStatus: Joi.string(),
    mimeType: Joi.string(),
    name: Joi.string(),
    size: Joi.object(Quantity_joi_1.QuantityJoi),
    url: Joi.string().uri(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=Attachment.joi.js.map