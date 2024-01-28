"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicalResource_CreateModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const Note_model_1 = require("./Note.model");
const RelatedPlaceRefOrValue_model_1 = require("./RelatedPlaceRefOrValue.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const Characteristic_model_1 = require("./Characteristic.model");
const ResourceRelationship_model_1 = require("./ResourceRelationship.model");
const ResourceSpecificationRef_model_1 = require("./ResourceSpecificationRef.model");
exports.LogicalResource_CreateModel = {
    '@baseType': String,
    '@referredType': String,
    '@schemaLocation': String,
    '@type': String,
    administrativeState: String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    category: String,
    description: String,
    endOperatingDate: Date,
    name: String,
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    operationalState: String,
    place: RelatedPlaceRefOrValue_model_1.RelatedPlaceRefOrValueModel,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    resourceCharacteristic: {
        '#type': [Characteristic_model_1.CharacteristicModel],
        default: undefined,
    },
    resourceRelationship: {
        '#type': [ResourceRelationship_model_1.ResourceRelationshipModel],
        default: undefined,
    },
    resourceSpecification: ResourceSpecificationRef_model_1.ResourceSpecificationRefModel,
    resourceStatus: String,
    resourceVersion: String,
    startOperatingDate: Date,
    usageState: String,
    value: String,
};
//# sourceMappingURL=LogicalResource_Create.model.js.map