"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecification_UpdateModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const ConstraintRef_model_1 = require("./ConstraintRef.model");
const EntitySpecificationRelationship_model_1 = require("./EntitySpecificationRelationship.model");
const FeatureSpecification_model_1 = require("./FeatureSpecification.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const ResourceSpecificationRef_model_1 = require("./ResourceSpecificationRef.model");
const ServiceLevelSpecificationRef_model_1 = require("./ServiceLevelSpecificationRef.model");
const ServiceSpecRelationship_model_1 = require("./ServiceSpecRelationship.model");
const CharacteristicSpecification_model_1 = require("./CharacteristicSpecification.model");
const TargetEntitySchema_model_1 = require("./TargetEntitySchema.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ServiceSpecification_UpdateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    constraint: { '#type': [ConstraintRef_model_1.ConstraintRefModel], default: undefined },
    description: String,
    entitySpecRelationship: {
        '#type': [EntitySpecificationRelationship_model_1.EntitySpecificationRelationshipModel],
        default: undefined,
    },
    featureSpecification: {
        '#type': [FeatureSpecification_model_1.FeatureSpecificationModel],
        default: undefined,
    },
    isBundle: Boolean,
    lifecycleStatus: String,
    name: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    resourceSpecification: {
        '#type': [ResourceSpecificationRef_model_1.ResourceSpecificationRefModel],
        default: undefined,
    },
    serviceLevelSpecification: {
        '#type': [ServiceLevelSpecificationRef_model_1.ServiceLevelSpecificationRefModel],
        default: undefined,
    },
    serviceSpecRelationship: {
        '#type': [ServiceSpecRelationship_model_1.ServiceSpecRelationshipModel],
        default: undefined,
    },
    specCharacteristic: {
        '#type': [CharacteristicSpecification_model_1.CharacteristicSpecificationModel],
        default: undefined,
    },
    targetEntitySchema: TargetEntitySchema_model_1.TargetEntitySchemaModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ServiceSpecification_Update.model.js.map