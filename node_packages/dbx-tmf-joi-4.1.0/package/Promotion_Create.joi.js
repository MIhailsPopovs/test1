"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion_CreateJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const tools_1 = require("./tools");
const PromotionPattern_joi_1 = require("./PromotionPattern.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.Promotion_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('Promotion'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    description: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string().required(),
    pattern: Joi.array().items(Joi.object(PromotionPattern_joi_1.PromotionPatternJoi)),
    promotionType: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=Promotion_Create.joi.js.map