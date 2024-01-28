"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_UpdateModel = void 0;
const AccountRef_model_1 = require("./AccountRef.model");
const AgreementRef_model_1 = require("./AgreementRef.model");
const Characteristic_model_1 = require("./Characteristic.model");
const ContactMedium_model_1 = require("./ContactMedium.model");
const CreditProfile_model_1 = require("./CreditProfile.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const PaymentMethodRef_model_1 = require("./PaymentMethodRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.Customer_UpdateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    account: { '#type': [AccountRef_model_1.AccountRefModel], default: undefined },
    agreement: { '#type': [AgreementRef_model_1.AgreementRefModel], default: undefined },
    characteristic: { '#type': [Characteristic_model_1.CharacteristicModel], default: undefined },
    contactMedium: { '#type': [ContactMedium_model_1.ContactMediumModel], default: undefined },
    creditProfile: { '#type': [CreditProfile_model_1.CreditProfileModel], default: undefined },
    engagedParty: RelatedParty_model_1.RelatedPartyModel,
    name: String,
    paymentMethod: { '#type': [PaymentMethodRef_model_1.PaymentMethodRefModel], default: undefined },
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    status: String,
    statusReason: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=Customer_Update.model.js.map