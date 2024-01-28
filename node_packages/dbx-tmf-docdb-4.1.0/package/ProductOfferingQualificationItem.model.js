"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationItemModel = void 0;
const AlternateProductOfferingProposal_model_1 = require("./AlternateProductOfferingProposal.model");
const EligibilityUnavailabilityReason_model_1 = require("./EligibilityUnavailabilityReason.model");
const Note_model_1 = require("./Note.model");
const ProductRefOrValue_model_1 = require("./ProductRefOrValue.model");
const ProductOfferingRef_model_1 = require("./ProductOfferingRef.model");
const QualificationItemRelationship_model_1 = require("./QualificationItemRelationship.model");
const TerminationError_model_1 = require("./TerminationError.model");
exports.ProductOfferingQualificationItemModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    action: String,
    alternateProductOfferingProposal: {
        '#type': [AlternateProductOfferingProposal_model_1.AlternateProductOfferingProposalModel],
        default: undefined,
    },
    eligibilityUnavailabilityReason: {
        '#type': [EligibilityUnavailabilityReason_model_1.EligibilityUnavailabilityReasonModel],
        default: undefined,
    },
    expectedActivationDate: Date,
    id: String,
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    product: ProductRefOrValue_model_1.ProductRefOrValueModel,
    productOffering: ProductOfferingRef_model_1.ProductOfferingRefModel,
    qualificationItemRelationship: {
        '#type': [QualificationItemRelationship_model_1.QualificationItemRelationshipModel],
        default: undefined,
    },
    qualificationItemResult: String,
    state: String,
    terminationError: { '#type': [TerminationError_model_1.TerminationErrorModel], default: undefined },
};
//# sourceMappingURL=ProductOfferingQualificationItem.model.js.map