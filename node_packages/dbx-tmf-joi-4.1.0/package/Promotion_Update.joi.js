"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion_UpdateJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const tools_1 = require("./tools");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.Promotion_UpdateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('Promotion'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    description: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string().required(),
    promotionType: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=Promotion_Update.joi.js.map