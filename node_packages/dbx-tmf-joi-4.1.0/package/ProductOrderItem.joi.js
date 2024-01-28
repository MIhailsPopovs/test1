"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderItemJoi = void 0;
const Joi = require("joi");
const AppointmentRef_joi_1 = require("./AppointmentRef.joi");
const BillingAccountRef_joi_1 = require("./BillingAccountRef.joi");
const OrderPrice_joi_1 = require("./OrderPrice.joi");
const OrderTerm_joi_1 = require("./OrderTerm.joi");
const PaymentRef_joi_1 = require("./PaymentRef.joi");
const ProductRefOrValue_joi_1 = require("./ProductRefOrValue.joi");
const ProductOfferingRef_joi_1 = require("./ProductOfferingRef.joi");
const ProductOfferingQualificationItemRef_joi_1 = require("./ProductOfferingQualificationItemRef.joi");
const OrderItemRelationship_joi_1 = require("./OrderItemRelationship.joi");
const ProductOfferingQualificationRef_joi_1 = require("./ProductOfferingQualificationRef.joi");
const QuoteItemRef_joi_1 = require("./QuoteItemRef.joi");
exports.ProductOrderItemJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOrderItem'),
    action: Joi.string().valid('add', 'modify', 'delete', 'noChange').required(),
    appointment: Joi.object(AppointmentRef_joi_1.AppointmentRefJoi),
    billingAccount: Joi.object(BillingAccountRef_joi_1.BillingAccountRefJoi),
    id: Joi.string().required(),
    itemPrice: Joi.array().items(Joi.object(OrderPrice_joi_1.OrderPriceJoi)),
    itemTerm: Joi.array().items(Joi.object(OrderTerm_joi_1.OrderTermJoi)),
    itemTotalPrice: Joi.array().items(Joi.object(OrderPrice_joi_1.OrderPriceJoi)),
    payment: Joi.array().items(Joi.object(PaymentRef_joi_1.PaymentRefJoi)),
    product: Joi.object(ProductRefOrValue_joi_1.ProductRefOrValueJoi),
    productOffering: Joi.object(ProductOfferingRef_joi_1.ProductOfferingRefJoi),
    productOfferingQualificationItem: Joi.object(ProductOfferingQualificationItemRef_joi_1.ProductOfferingQualificationItemRefJoi),
    productOrderItem: Joi.array().items(Joi.object()),
    productOrderItemRelationship: Joi.array().items(Joi.object(OrderItemRelationship_joi_1.OrderItemRelationshipJoi)),
    qualification: Joi.array().items(Joi.object(ProductOfferingQualificationRef_joi_1.ProductOfferingQualificationRefJoi)),
    quantity: Joi.number(),
    quoteItem: Joi.object(QuoteItemRef_joi_1.QuoteItemRefJoi),
    state: Joi.string().valid('acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'assessingCancellation', 'pendingCancellation'),
};
exports.ProductOrderItemJoi.productOrderItem = Joi.array().items(Joi.object(exports.ProductOrderItemJoi));
//# sourceMappingURL=ProductOrderItem.joi.js.map