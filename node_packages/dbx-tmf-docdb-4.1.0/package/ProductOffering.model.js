"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingModel = void 0;
const AgreementRef_model_1 = require("./AgreementRef.model");
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const BundledProductOffering_model_1 = require("./BundledProductOffering.model");
const CategoryRef_model_1 = require("./CategoryRef.model");
const ChannelRef_model_1 = require("./ChannelRef.model");
const LineOfBusiness_model_1 = require("./LineOfBusiness.model");
const MarketSegmentRef_model_1 = require("./MarketSegmentRef.model");
const PlaceRef_model_1 = require("./PlaceRef.model");
const ProductSpecificationCharacteristicValueUse_model_1 = require("./ProductSpecificationCharacteristicValueUse.model");
const ProductOfferingCharacteristic_model_1 = require("./ProductOfferingCharacteristic.model");
const ProductOfferingPriceRefOrValue_model_1 = require("./ProductOfferingPriceRefOrValue.model");
const ProductOfferingRelationship_model_1 = require("./ProductOfferingRelationship.model");
const ProductOfferingTerm_model_1 = require("./ProductOfferingTerm.model");
const ProductSpecificationRef_model_1 = require("./ProductSpecificationRef.model");
const ResourceCandidateRef_model_1 = require("./ResourceCandidateRef.model");
const Selectiveness_model_1 = require("./Selectiveness.model");
const ServiceCandidateRef_model_1 = require("./ServiceCandidateRef.model");
const SLARef_model_1 = require("./SLARef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductOfferingModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    agreement: { '#type': [AgreementRef_model_1.AgreementRefModel], default: undefined },
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    bundledProductOffering: {
        '#type': [BundledProductOffering_model_1.BundledProductOfferingModel],
        default: undefined,
    },
    category: { '#type': [CategoryRef_model_1.CategoryRefModel], default: undefined },
    channel: { '#type': [ChannelRef_model_1.ChannelRefModel], default: undefined },
    description: String,
    href: String,
    id: String,
    isBundle: Boolean,
    isSelective: Boolean,
    isSellable: Boolean,
    lastUpdate: Date,
    lifecycleStatus: String,
    lineOfBusiness: LineOfBusiness_model_1.LineOfBusinessModel,
    marketSegment: { '#type': [MarketSegmentRef_model_1.MarketSegmentRefModel], default: undefined },
    name: String,
    offerType: String,
    place: { '#type': [PlaceRef_model_1.PlaceRefModel], default: undefined },
    prodSpecCharValueUse: {
        '#type': [ProductSpecificationCharacteristicValueUse_model_1.ProductSpecificationCharacteristicValueUseModel],
        default: undefined,
    },
    productOfferingCharacteristic: {
        '#type': [ProductOfferingCharacteristic_model_1.ProductOfferingCharacteristicModel],
        default: undefined,
    },
    productOfferingPrice: {
        '#type': [ProductOfferingPriceRefOrValue_model_1.ProductOfferingPriceRefOrValueModel],
        default: undefined,
    },
    productOfferingRelationship: {
        '#type': [ProductOfferingRelationship_model_1.ProductOfferingRelationshipModel],
        default: undefined,
    },
    productOfferingTerm: {
        '#type': [ProductOfferingTerm_model_1.ProductOfferingTermModel],
        default: undefined,
    },
    productSpecification: ProductSpecificationRef_model_1.ProductSpecificationRefModel,
    resourceCandidate: ResourceCandidateRef_model_1.ResourceCandidateRefModel,
    selectiveness: Selectiveness_model_1.SelectivenessModel,
    serviceCandidate: ServiceCandidateRef_model_1.ServiceCandidateRefModel,
    serviceLevelAgreement: SLARef_model_1.SLARefModel,
    statusReason: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ProductOffering.model.js.map