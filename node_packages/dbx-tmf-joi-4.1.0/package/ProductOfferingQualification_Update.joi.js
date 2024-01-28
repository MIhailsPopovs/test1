"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualification_UpdateJoi = void 0;
const Joi = require("joi");
const CategoryRef_joi_1 = require("./CategoryRef.joi");
const ChannelRef_joi_1 = require("./ChannelRef.joi");
const Note_joi_1 = require("./Note.joi");
const RelatedPlaceRefOrValue_joi_1 = require("./RelatedPlaceRefOrValue.joi");
const ProductOfferingQualificationItem_joi_1 = require("./ProductOfferingQualificationItem.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
exports.ProductOfferingQualification_UpdateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingQualification'),
    category: Joi.object(CategoryRef_joi_1.CategoryRefJoi),
    channel: Joi.object(ChannelRef_joi_1.ChannelRefJoi),
    description: Joi.string(),
    effectiveQualificationDate: Joi.date(),
    expectedPOQCompletionDate: Joi.date(),
    expirationDate: Joi.date(),
    instantSyncQualification: Joi.boolean(),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    place: Joi.array().items(Joi.object(RelatedPlaceRefOrValue_joi_1.RelatedPlaceRefOrValueJoi)),
    productOfferingQualificationItem: Joi.array().items(Joi.object(ProductOfferingQualificationItem_joi_1.ProductOfferingQualificationItemJoi)),
    provideAlternative: Joi.boolean(),
    provideOnlyAvailable: Joi.boolean(),
    provideUnavailabilityReason: Joi.boolean(),
    qualificationResult: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    requestedPOQCompletionDate: Joi.date(),
    state: Joi.string().valid('accepted', 'terminatedWithError', 'inProgress', 'done'),
};
//# sourceMappingURL=ProductOfferingQualification_Update.joi.js.map