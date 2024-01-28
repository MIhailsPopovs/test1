"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationItemJoi = void 0;
const Joi = require("joi");
const AlternateProductOfferingProposal_joi_1 = require("./AlternateProductOfferingProposal.joi");
const EligibilityUnavailabilityReason_joi_1 = require("./EligibilityUnavailabilityReason.joi");
const Note_joi_1 = require("./Note.joi");
const ProductRefOrValue_joi_1 = require("./ProductRefOrValue.joi");
const ProductOfferingRef_joi_1 = require("./ProductOfferingRef.joi");
const QualificationItemRelationship_joi_1 = require("./QualificationItemRelationship.joi");
const TerminationError_joi_1 = require("./TerminationError.joi");
exports.ProductOfferingQualificationItemJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingQualificationItem'),
    action: Joi.string().valid('add', 'modify', 'delete', 'noChange'),
    alternateProductOfferingProposal: Joi.array().items(Joi.object(AlternateProductOfferingProposal_joi_1.AlternateProductOfferingProposalJoi)),
    eligibilityUnavailabilityReason: Joi.array().items(Joi.object(EligibilityUnavailabilityReason_joi_1.EligibilityUnavailabilityReasonJoi)),
    expectedActivationDate: Joi.date(),
    id: Joi.string().required(),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    product: Joi.object(ProductRefOrValue_joi_1.ProductRefOrValueJoi),
    productOffering: Joi.object(ProductOfferingRef_joi_1.ProductOfferingRefJoi),
    qualificationItemRelationship: Joi.array().items(Joi.object(QualificationItemRelationship_joi_1.QualificationItemRelationshipJoi)),
    qualificationItemResult: Joi.string(),
    state: Joi.string().valid('accepted', 'terminatedWithError', 'inProgress', 'done'),
    terminationError: Joi.array().items(Joi.object(TerminationError_joi_1.TerminationErrorJoi)),
};
//# sourceMappingURL=ProductOfferingQualificationItem.joi.js.map