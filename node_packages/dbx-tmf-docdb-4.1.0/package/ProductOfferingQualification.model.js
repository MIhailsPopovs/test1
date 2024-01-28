"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationModel = void 0;
const CategoryRef_model_1 = require("./CategoryRef.model");
const ChannelRef_model_1 = require("./ChannelRef.model");
const Note_model_1 = require("./Note.model");
const RelatedPlaceRefOrValue_model_1 = require("./RelatedPlaceRefOrValue.model");
const ProductOfferingQualificationItem_model_1 = require("./ProductOfferingQualificationItem.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
exports.ProductOfferingQualificationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    category: CategoryRef_model_1.CategoryRefModel,
    channel: ChannelRef_model_1.ChannelRefModel,
    description: String,
    effectiveQualificationDate: Date,
    expectedPOQCompletionDate: Date,
    expirationDate: Date,
    href: String,
    id: String,
    instantSyncQualification: Boolean,
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    place: { '#type': [RelatedPlaceRefOrValue_model_1.RelatedPlaceRefOrValueModel], default: undefined },
    productOfferingQualificationDate: Date,
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
//# sourceMappingURL=ProductOfferingQualification.model.js.map