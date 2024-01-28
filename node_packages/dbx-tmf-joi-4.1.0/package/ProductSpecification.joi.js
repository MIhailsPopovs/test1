"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const BundledProductSpecification_joi_1 = require("./BundledProductSpecification.joi");
const tools_1 = require("./tools");
const ProductSpecificationCharacteristic_joi_1 = require("./ProductSpecificationCharacteristic.joi");
const ProductSpecificationRelationship_joi_1 = require("./ProductSpecificationRelationship.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const ResourceSpecificationRef_joi_1 = require("./ResourceSpecificationRef.joi");
const ServiceSpecificationRef_joi_1 = require("./ServiceSpecificationRef.joi");
const TargetProductSchema_joi_1 = require("./TargetProductSchema.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductSpecificationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductSpecification'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    brand: Joi.string(),
    bundledProductSpecification: Joi.array().items(Joi.object(BundledProductSpecification_joi_1.BundledProductSpecificationJoi)),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    isBundle: Joi.boolean(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    productNumber: Joi.string(),
    productSpecCharacteristic: Joi.array().items(Joi.object(ProductSpecificationCharacteristic_joi_1.ProductSpecificationCharacteristicJoi)),
    productSpecificationRelationship: Joi.array().items(Joi.object(ProductSpecificationRelationship_joi_1.ProductSpecificationRelationshipJoi)),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    resourceSpecification: Joi.array().items(Joi.object(ResourceSpecificationRef_joi_1.ResourceSpecificationRefJoi)),
    serviceSpecification: Joi.array().items(Joi.object(ServiceSpecificationRef_joi_1.ServiceSpecificationRefJoi)),
    targetProductSchema: Joi.object(TargetProductSchema_joi_1.TargetProductSchemaJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ProductSpecification.joi.js.map