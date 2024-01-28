"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualification_UpdateModel = void 0;
const CategoryRef_model_1 = require("./CategoryRef.model");
const ChannelRef_model_1 = require("./ChannelRef.model");
const Note_model_1 = require("./Note.model");
const RelatedPlaceRefOrValue_model_1 = require("./RelatedPlaceRefOrValue.model");
const ProductOfferingQualificationItem_model_1 = require("./ProductOfferingQualificationItem.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
exports.ProductOfferingQualification_UpdateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    category: CategoryRef_model_1.CategoryRefModel,
    channel: ChannelRef_model_1.ChannelRefModel,
    description: String,
    effectiveQualificationDate: Date,
    expectedPOQCompletionDate: Date,
    expirationDate: Date,
    instantSyncQualification: Boolean,
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    place: { '#type': [RelatedPlaceRefOrValue_model_1.RelatedPlaceRefOrValueModel], default: undefined },
    productOfferingQualificationItem: {
        '#type': [ProductOfferingQualificationItem_model_1.ProductOfferingQualificationItemModel],
        default: undefined,
    },
    provideAlternative: Boolean,
    provideOnlyAvailable: Boolean,
    provideUnavailabilityReason: Boolean,
    qualificationResult: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    requestedPOQCompletionDate: Date,
    state: String,
};
//# sourceMappingURL=ProductOfferingQualification_Update.model.js.map