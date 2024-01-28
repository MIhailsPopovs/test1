"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrder_UpdateJoi = void 0;
const Joi = require("joi");
const AgreementRef_joi_1 = require("./AgreementRef.joi");
const BillingAccountRef_joi_1 = require("./BillingAccountRef.joi");
const RelatedChannel_joi_1 = require("./RelatedChannel.joi");
const Note_joi_1 = require("./Note.joi");
const OrderPrice_joi_1 = require("./OrderPrice.joi");
const PaymentRef_joi_1 = require("./PaymentRef.joi");
const ProductOfferingQualificationRef_joi_1 = require("./ProductOfferingQualificationRef.joi");
const ProductOrderItem_joi_1 = require("./ProductOrderItem.joi");
const QuoteRef_joi_1 = require("./QuoteRef.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
exports.ProductOrder_UpdateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOrder'),
    agreement: Joi.array().items(Joi.object(AgreementRef_joi_1.AgreementRefJoi)),
    billingAccount: Joi.object(BillingAccountRef_joi_1.BillingAccountRefJoi),
    cancellationDate: Joi.date(),
    cancellationReason: Joi.string(),
    category: Joi.string(),
    channel: Joi.array().items(Joi.object(RelatedChannel_joi_1.RelatedChannelJoi)),
    completionDate: Joi.date(),
    description: Joi.string(),
    expectedCompletionDate: Joi.date(),
    externalId: Joi.string(),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    notificationContact: Joi.string(),
    orderTotalPrice: Joi.array().items(Joi.object(OrderPrice_joi_1.OrderPriceJoi)),
    payment: Joi.array().items(Joi.object(PaymentRef_joi_1.PaymentRefJoi)),
    priority: Joi.string(),
    productOfferingQualification: Joi.array().items(Joi.object(ProductOfferingQualificationRef_joi_1.ProductOfferingQualificationRefJoi)),
    productOrderItem: Joi.array()
        .items(Joi.object(ProductOrderItem_joi_1.ProductOrderItemJoi))
        .required(),
    quote: Joi.array().items(Joi.object(QuoteRef_joi_1.QuoteRefJoi)),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    requestedCompletionDate: Joi.date(),
    requestedStartDate: Joi.date(),
    state: Joi.string().valid('acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial', 'assessingCancellation', 'pendingCancellation'),
};
//# sourceMappingURL=ProductOrder_Update.joi.js.map