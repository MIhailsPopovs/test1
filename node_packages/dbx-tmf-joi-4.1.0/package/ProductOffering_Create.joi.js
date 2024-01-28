"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOffering_CreateJoi = void 0;
const Joi = require("joi");
const AgreementRef_joi_1 = require("./AgreementRef.joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const BundledProductOffering_joi_1 = require("./BundledProductOffering.joi");
const CategoryRef_joi_1 = require("./CategoryRef.joi");
const ChannelRef_joi_1 = require("./ChannelRef.joi");
const tools_1 = require("./tools");
const LineOfBusiness_joi_1 = require("./LineOfBusiness.joi");
const MarketSegmentRef_joi_1 = require("./MarketSegmentRef.joi");
const PlaceRef_joi_1 = require("./PlaceRef.joi");
const ProductSpecificationCharacteristicValueUse_joi_1 = require("./ProductSpecificationCharacteristicValueUse.joi");
const ProductOfferingCharacteristic_joi_1 = require("./ProductOfferingCharacteristic.joi");
const ProductOfferingPriceRefOrValue_joi_1 = require("./ProductOfferingPriceRefOrValue.joi");
const ProductOfferingRelationship_joi_1 = require("./ProductOfferingRelationship.joi");
const ProductOfferingTerm_joi_1 = require("./ProductOfferingTerm.joi");
const ProductSpecificationRef_joi_1 = require("./ProductSpecificationRef.joi");
const ResourceCandidateRef_joi_1 = require("./ResourceCandidateRef.joi");
const Selectiveness_joi_1 = require("./Selectiveness.joi");
const ServiceCandidateRef_joi_1 = require("./ServiceCandidateRef.joi");
const SLARef_joi_1 = require("./SLARef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOffering_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOffering'),
    agreement: Joi.array().items(Joi.object(AgreementRef_joi_1.AgreementRefJoi)),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    bundledProductOffering: Joi.array().items(Joi.object(BundledProductOffering_joi_1.BundledProductOfferingJoi)),
    category: Joi.array().items(Joi.object(CategoryRef_joi_1.CategoryRefJoi)),
    channel: Joi.array().items(Joi.object(ChannelRef_joi_1.ChannelRefJoi)),
    description: Joi.string(),
    isBundle: Joi.boolean(),
    isSelective: Joi.boolean(),
    isSellable: Joi.boolean(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    lineOfBusiness: Joi.object(LineOfBusiness_joi_1.LineOfBusinessJoi),
    marketSegment: Joi.array().items(Joi.object(MarketSegmentRef_joi_1.MarketSegmentRefJoi)),
    name: Joi.string().required(),
    offerType: Joi.string().valid('Plan', 'Add-on').default('Plan'),
    place: Joi.array().items(Joi.object(PlaceRef_joi_1.PlaceRefJoi)),
    prodSpecCharValueUse: Joi.array().items(Joi.object(ProductSpecificationCharacteristicValueUse_joi_1.ProductSpecificationCharacteristicValueUseJoi)),
    productOfferingCharacteristic: Joi.array().items(Joi.object(ProductOfferingCharacteristic_joi_1.ProductOfferingCharacteristicJoi)),
    productOfferingPrice: Joi.array().items(Joi.object(ProductOfferingPriceRefOrValue_joi_1.ProductOfferingPriceRefOrValueJoi)),
    productOfferingRelationship: Joi.array().items(Joi.object(ProductOfferingRelationship_joi_1.ProductOfferingRelationshipJoi)),
    productOfferingTerm: Joi.array().items(Joi.object(ProductOfferingTerm_joi_1.ProductOfferingTermJoi)),
    productSpecification: Joi.object(ProductSpecificationRef_joi_1.ProductSpecificationRefJoi),
    resourceCandidate: Joi.object(ResourceCandidateRef_joi_1.ResourceCandidateRefJoi),
    selectiveness: Joi.object(Selectiveness_joi_1.SelectivenessJoi),
    serviceCandidate: Joi.object(ServiceCandidateRef_joi_1.ServiceCandidateRefJoi),
    serviceLevelAgreement: Joi.object(SLARef_joi_1.SLARefJoi),
    statusReason: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ProductOffering_Create.joi.js.map