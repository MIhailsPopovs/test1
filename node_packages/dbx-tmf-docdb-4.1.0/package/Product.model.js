"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const AgreementItemRef_model_1 = require("./AgreementItemRef.model");
const BillingAccountRef_model_1 = require("./BillingAccountRef.model");
const RelatedPlaceRefOrValue_model_1 = require("./RelatedPlaceRefOrValue.model");
const ProductRefOrValue_model_1 = require("./ProductRefOrValue.model");
const Characteristic_model_1 = require("./Characteristic.model");
const ProductOfferingRef_model_1 = require("./ProductOfferingRef.model");
const RelatedProductOrderItem_model_1 = require("./RelatedProductOrderItem.model");
const ProductPrice_model_1 = require("./ProductPrice.model");
const ProductRelationship_model_1 = require("./ProductRelationship.model");
const ProductSpecificationRef_model_1 = require("./ProductSpecificationRef.model");
const ProductTerm_model_1 = require("./ProductTerm.model");
const ResourceRef_model_1 = require("./ResourceRef.model");
const ServiceRef_model_1 = require("./ServiceRef.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
exports.ProductModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    agreement: { '#type': [AgreementItemRef_model_1.AgreementItemRefModel], default: undefined },
    billingAccount: BillingAccountRef_model_1.BillingAccountRefModel,
    description: String,
    href: String,
    id: String,
    isBundle: Boolean,
    isCustomerVisible: Boolean,
    name: String,
    orderDate: Date,
    place: { '#type': [RelatedPlaceRefOrValue_model_1.RelatedPlaceRefOrValueModel], default: undefined },
    product: { '#type': [ProductRefOrValue_model_1.ProductRefOrValueModel], default: undefined },
    productCharacteristic: { '#type': [Characteristic_model_1.CharacteristicModel], default: undefined },
    productOffering: ProductOfferingRef_model_1.ProductOfferingRefModel,
    productOrderItem: {
        '#type': [RelatedProductOrderItem_model_1.RelatedProductOrderItemModel],
        default: undefined,
    },
    productPrice: { '#type': [ProductPrice_model_1.ProductPriceModel], default: undefined },
    productRelationship: {
        '#type': [ProductRelationship_model_1.ProductRelationshipModel],
        default: undefined,
    },
    productSerialNumber: String,
    productSpecification: ProductSpecificationRef_model_1.ProductSpecificationRefModel,
    productTerm: { '#type': [ProductTerm_model_1.ProductTermModel], default: undefined },
    realizingResource: { '#type': [ResourceRef_model_1.ResourceRefModel], default: undefined },
    realizingService: { '#type': [ServiceRef_model_1.ServiceRefModel], default: undefined },
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    startDate: Date,
    status: String,
    terminationDate: Date,
};
//# sourceMappingURL=Product.model.js.map