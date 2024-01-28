"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderModel = void 0;
const AgreementRef_model_1 = require("./AgreementRef.model");
const BillingAccountRef_model_1 = require("./BillingAccountRef.model");
const RelatedChannel_model_1 = require("./RelatedChannel.model");
const Note_model_1 = require("./Note.model");
const OrderPrice_model_1 = require("./OrderPrice.model");
const PaymentRef_model_1 = require("./PaymentRef.model");
const ProductOfferingQualificationRef_model_1 = require("./ProductOfferingQualificationRef.model");
const ProductOrderItem_model_1 = require("./ProductOrderItem.model");
const QuoteRef_model_1 = require("./QuoteRef.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
exports.ProductOrderModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    agreement: { '#type': [AgreementRef_model_1.AgreementRefModel], default: undefined },
    billingAccount: BillingAccountRef_model_1.BillingAccountRefModel,
    cancellationDate: Date,
    cancellationReason: String,
    category: String,
    channel: { '#type': [RelatedChannel_model_1.RelatedChannelModel], default: undefined },
    completionDate: Date,
    description: String,
    expectedCompletionDate: Date,
    externalId: String,
    href: String,
    id: String,
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    notificationContact: String,
    orderDate: Date,
    orderTotalPrice: { '#type': [OrderPrice_model_1.OrderPriceModel], default: undefined },
    payment: { '#type': [PaymentRef_model_1.PaymentRefModel], default: undefined },
    priority: String,
    productOfferingQualification: {
        '#type': [ProductOfferingQualificationRef_model_1.ProductOfferingQualificationRefModel],
        default: undefined,
    },
    productOrderItem: { '#type': [ProductOrderItem_model_1.ProductOrderItemModel], default: undefined },
    quote: { '#type': [QuoteRef_model_1.QuoteRefModel], default: undefined },
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    requestedCompletionDate: Date,
    requestedStartDate: Date,
    state: String,
};
//# sourceMappingURL=ProductOrder.model.js.map