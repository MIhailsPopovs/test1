"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySpecificationModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const ConstraintRef_model_1 = require("./ConstraintRef.model");
const EntitySpecificationRelationship_model_1 = require("./EntitySpecificationRelationship.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const CharacteristicSpecification_model_1 = require("./CharacteristicSpecification.model");
const TargetEntitySchema_model_1 = require("./TargetEntitySchema.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.EntitySpecificationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    constraint: { '#type': [ConstraintRef_model_1.ConstraintRefModel], default: undefined },
    description: String,
    entitySpecRelationship: {
        '#type': [EntitySpecificationRelationship_model_1.EntitySpecificationRelationshipModel],
        default: undefined,
    },
    href: String,
    id: String,
    isBundle: Boolean,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    specCharacteristic: {
        '#type': [CharacteristicSpecification_model_1.CharacteristicSpecificationModel],
        default: undefined,
    },
    targetEntitySchema: TargetEntitySchema_model_1.TargetEntitySchemaModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=EntitySpecification.model.js.map