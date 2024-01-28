"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource_CreateJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const Note_joi_1 = require("./Note.joi");
const RelatedPlaceRefOrValue_joi_1 = require("./RelatedPlaceRefOrValue.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const Characteristic_joi_1 = require("./Characteristic.joi");
const ResourceRelationship_joi_1 = require("./ResourceRelationship.joi");
const ResourceSpecificationRef_joi_1 = require("./ResourceSpecificationRef.joi");
exports.Resource_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Resource'),
    administrativeState: Joi.string().valid('locked', 'unlocked', 'shutdown'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    category: Joi.string(),
    description: Joi.string(),
    endOperatingDate: Joi.date(),
    name: Joi.string().required(),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    operationalState: Joi.string().valid('enable', 'disable'),
    place: Joi.object(RelatedPlaceRefOrValue_joi_1.RelatedPlaceRefOrValueJoi),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    resourceCharacteristic: Joi.array().items(Joi.object(Characteristic_joi_1.CharacteristicJoi)),
    resourceRelationship: Joi.array().items(Joi.object(ResourceRelationship_joi_1.ResourceRelationshipJoi)),
    resourceSpecification: Joi.object(ResourceSpecificationRef_joi_1.ResourceSpecificationRefJoi),
    resourceStatus: Joi.string().valid('standby', 'alarm', 'available', 'reserved', 'unknown', 'suspended'),
    resourceVersion: Joi.string(),
    startOperatingDate: Joi.date(),
    usageState: Joi.string().valid('idle', 'active', 'busy'),
};
//# sourceMappingURL=Resource_Create.joi.js.map