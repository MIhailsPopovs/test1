"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecification_UpdateModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const BundledProductSpecification_model_1 = require("./BundledProductSpecification.model");
const ProductSpecificationCharacteristic_model_1 = require("./ProductSpecificationCharacteristic.model");
const ProductSpecificationRelationship_model_1 = require("./ProductSpecificationRelationship.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const ResourceSpecificationRef_model_1 = require("./ResourceSpecificationRef.model");
const ServiceSpecificationRef_model_1 = require("./ServiceSpecificationRef.model");
const TargetProductSchema_model_1 = require("./TargetProductSchema.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductSpecification_UpdateModel = {
    '@schemaLocation': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    brand: String,
    bundledProductSpecification: {
        '#type': [BundledProductSpecification_model_1.BundledProductSpecificationModel],
        default: undefined,
    },
    description: String,
    isBundle: Boolean,
    lifecycleStatus: String,
    name: String,
    productNumber: String,
    productSpecCharacteristic: {
        '#type': [ProductSpecificationCharacteristic_model_1.ProductSpecificationCharacteristicModel],
        default: undefined,
    },
    productSpecificationRelationship: {
        '#type': [ProductSpecificationRelationship_model_1.ProductSpecificationRelationshipModel],
        default: undefined,
    },
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    resourceSpecification: {
        '#type': [ResourceSpecificationRef_model_1.ResourceSpecificationRefModel],
        default: undefined,
    },
    serviceSpecification: {
        '#type': [ServiceSpecificationRef_model_1.ServiceSpecificationRefModel],
        default: undefined,
    },
    targetProductSchema: TargetProductSchema_model_1.TargetProductSchemaModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ProductSpecification_Update.model.js.map