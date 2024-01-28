"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecification_UpdateJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const ConstraintRef_joi_1 = require("./ConstraintRef.joi");
const EntitySpecificationRelationship_joi_1 = require("./EntitySpecificationRelationship.joi");
const FeatureSpecification_joi_1 = require("./FeatureSpecification.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const ResourceSpecificationRef_joi_1 = require("./ResourceSpecificationRef.joi");
const ServiceLevelSpecificationRef_joi_1 = require("./ServiceLevelSpecificationRef.joi");
const ServiceSpecRelationship_joi_1 = require("./ServiceSpecRelationship.joi");
const CharacteristicSpecification_joi_1 = require("./CharacteristicSpecification.joi");
const TargetEntitySchema_joi_1 = require("./TargetEntitySchema.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ServiceSpecification_UpdateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceSpecification'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    constraint: Joi.array().items(Joi.object(ConstraintRef_joi_1.ConstraintRefJoi)),
    description: Joi.string(),
    entitySpecRelationship: Joi.array().items(Joi.object(EntitySpecificationRelationship_joi_1.EntitySpecificationRelationshipJoi)),
    featureSpecification: Joi.array().items(Joi.object(FeatureSpecification_joi_1.FeatureSpecificationJoi)),
    isBundle: Joi.boolean(),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    resourceSpecification: Joi.array().items(Joi.object(ResourceSpecificationRef_joi_1.ResourceSpecificationRefJoi)),
    serviceLevelSpecification: Joi.array().items(Joi.object(ServiceLevelSpecificationRef_joi_1.ServiceLevelSpecificationRefJoi)),
    serviceSpecRelationship: Joi.array().items(Joi.object(ServiceSpecRelationship_joi_1.ServiceSpecRelationshipJoi)),
    specCharacteristic: Joi.array().items(Joi.object(CharacteristicSpecification_joi_1.CharacteristicSpecificationJoi)),
    targetEntitySchema: Joi.object(TargetEntitySchema_joi_1.TargetEntitySchemaJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceSpecification_Update.joi.js.map