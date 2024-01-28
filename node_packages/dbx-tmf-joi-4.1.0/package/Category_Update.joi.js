"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category_UpdateJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const ProductOfferingRef_joi_1 = require("./ProductOfferingRef.joi");
const CategoryRef_joi_1 = require("./CategoryRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.Category_UpdateJoi = {
    '@schemaLocation': Joi.string().uri(),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    description: Joi.string(),
    isRoot: Joi.boolean(),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    parentId: Joi.string(),
    productOffering: Joi.array().items(Joi.object(ProductOfferingRef_joi_1.ProductOfferingRefJoi)),
    subCategory: Joi.array().items(Joi.object(CategoryRef_joi_1.CategoryRefJoi)),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=Category_Update.joi.js.map