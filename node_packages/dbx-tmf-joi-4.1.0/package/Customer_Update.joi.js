"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_UpdateJoi = void 0;
const Joi = require("joi");
const AccountRef_joi_1 = require("./AccountRef.joi");
const AgreementRef_joi_1 = require("./AgreementRef.joi");
const Characteristic_joi_1 = require("./Characteristic.joi");
const ContactMedium_joi_1 = require("./ContactMedium.joi");
const CreditProfile_joi_1 = require("./CreditProfile.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const PaymentMethodRef_joi_1 = require("./PaymentMethodRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.Customer_UpdateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Customer'),
    account: Joi.array().items(Joi.object(AccountRef_joi_1.AccountRefJoi)),
    agreement: Joi.array().items(Joi.object(AgreementRef_joi_1.AgreementRefJoi)),
    characteristic: Joi.array().items(Joi.object(Characteristic_joi_1.CharacteristicJoi)),
    contactMedium: Joi.array().items(Joi.object(ContactMedium_joi_1.ContactMediumJoi)),
    creditProfile: Joi.array().items(Joi.object(CreditProfile_joi_1.CreditProfileJoi)),
    engagedParty: Joi.object(RelatedParty_joi_1.RelatedPartyJoi).required(),
    name: Joi.string(),
    paymentMethod: Joi.array().items(Joi.object(PaymentMethodRef_joi_1.PaymentMethodRefJoi)),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    status: Joi.string(),
    statusReason: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=Customer_Update.joi.js.map