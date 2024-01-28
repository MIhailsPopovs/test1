"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductJoi = void 0;
const Joi = require("joi");
const AgreementItemRef_joi_1 = require("./AgreementItemRef.joi");
const BillingAccountRef_joi_1 = require("./BillingAccountRef.joi");
const RelatedPlaceRefOrValue_joi_1 = require("./RelatedPlaceRefOrValue.joi");
const ProductRefOrValue_joi_1 = require("./ProductRefOrValue.joi");
const Characteristic_joi_1 = require("./Characteristic.joi");
const ProductOfferingRef_joi_1 = require("./ProductOfferingRef.joi");
const RelatedProductOrderItem_joi_1 = require("./RelatedProductOrderItem.joi");
const ProductPrice_joi_1 = require("./ProductPrice.joi");
const ProductRelationship_joi_1 = require("./ProductRelationship.joi");
const ProductSpecificationRef_joi_1 = require("./ProductSpecificationRef.joi");
const ProductTerm_joi_1 = require("./ProductTerm.joi");
const ResourceRef_joi_1 = require("./ResourceRef.joi");
const ServiceRef_joi_1 = require("./ServiceRef.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
exports.ProductJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Product'),
    agreement: Joi.array().items(Joi.object(AgreementItemRef_joi_1.AgreementItemRefJoi)),
    billingAccount: Joi.object(BillingAccountRef_joi_1.BillingAccountRefJoi),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    isBundle: Joi.boolean(),
    isCustomerVisible: Joi.boolean(),
    name: Joi.string(),
    orderDate: Joi.date(),
    place: Joi.array().items(Joi.object(RelatedPlaceRefOrValue_joi_1.RelatedPlaceRefOrValueJoi)),
    product: Joi.array().items(Joi.object(ProductRefOrValue_joi_1.ProductRefOrValueJoi)),
    productCharacteristic: Joi.array().items(Joi.object(Characteristic_joi_1.CharacteristicJoi)),
    productOffering: Joi.object(ProductOfferingRef_joi_1.ProductOfferingRefJoi),
    productOrderItem: Joi.array().items(Joi.object(RelatedProductOrderItem_joi_1.RelatedProductOrderItemJoi)),
    productPrice: Joi.array().items(Joi.object(ProductPrice_joi_1.ProductPriceJoi)),
    productRelationship: Joi.array().items(Joi.object(ProductRelationship_joi_1.ProductRelationshipJoi)),
    productSerialNumber: Joi.string(),
    productSpecification: Joi.object(ProductSpecificationRef_joi_1.ProductSpecificationRefJoi),
    productTerm: Joi.array().items(Joi.object(ProductTerm_joi_1.ProductTermJoi)),
    realizingResource: Joi.array().items(Joi.object(ResourceRef_joi_1.ResourceRefJoi)),
    realizingService: Joi.array().items(Joi.object(ServiceRef_joi_1.ServiceRefJoi)),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    startDate: Joi.date(),
    status: Joi.string().valid('created', 'pendingActive', 'cancelled', 'active', 'pendingTerminate', 'terminated', 'suspended', 'aborted '),
    terminationDate: Joi.date(),
};
//# sourceMappingURL=Product.joi.js.map