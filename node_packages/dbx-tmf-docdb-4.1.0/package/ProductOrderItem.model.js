"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderItemModel = void 0;
const AppointmentRef_model_1 = require("./AppointmentRef.model");
const BillingAccountRef_model_1 = require("./BillingAccountRef.model");
const OrderPrice_model_1 = require("./OrderPrice.model");
const OrderTerm_model_1 = require("./OrderTerm.model");
const PaymentRef_model_1 = require("./PaymentRef.model");
const ProductRefOrValue_model_1 = require("./ProductRefOrValue.model");
const ProductOfferingRef_model_1 = require("./ProductOfferingRef.model");
const ProductOfferingQualificationItemRef_model_1 = require("./ProductOfferingQualificationItemRef.model");
const OrderItemRelationship_model_1 = require("./OrderItemRelationship.model");
const ProductOfferingQualificationRef_model_1 = require("./ProductOfferingQualificationRef.model");
const QuoteItemRef_model_1 = require("./QuoteItemRef.model");
exports.ProductOrderItemModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    action: String,
    appointment: AppointmentRef_model_1.AppointmentRefModel,
    billingAccount: BillingAccountRef_model_1.BillingAccountRefModel,
    id: String,
    itemPrice: { '#type': [OrderPrice_model_1.OrderPriceModel], default: undefined },
    itemTerm: { '#type': [OrderTerm_model_1.OrderTermModel], default: undefined },
    itemTotalPrice: { '#type': [OrderPrice_model_1.OrderPriceModel], default: undefined },
    payment: { '#type': [PaymentRef_model_1.PaymentRefModel], default: undefined },
    product: ProductRefOrValue_model_1.ProductRefOrValueModel,
    productOffering: ProductOfferingRef_model_1.ProductOfferingRefModel,
    productOfferingQualificationItem: ProductOfferingQualificationItemRef_model_1.ProductOfferingQualificationItemRefModel,
    productOrderItem: { '#type': [Object], default: undefined },
    productOrderItemRelationship: {
        '#type': [OrderItemRelationship_model_1.OrderItemRelationshipModel],
        default: undefined,
    },
    qualification: {
        '#type': [ProductOfferingQualificationRef_model_1.ProductOfferingQualificationRefModel],
        default: undefined,
    },
    quantity: Number,
    quoteItem: QuoteItemRef_model_1.QuoteItemRefModel,
    state: String,
};
//# sourceMappingURL=ProductOrderItem.model.js.map