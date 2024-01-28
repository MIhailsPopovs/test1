"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySpecificationJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const ConstraintRef_joi_1 = require("./ConstraintRef.joi");
const EntitySpecificationRelationship_joi_1 = require("./EntitySpecificationRelationship.joi");
const tools_1 = require("./tools");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const CharacteristicSpecification_joi_1 = require("./CharacteristicSpecification.joi");
const TargetEntitySchema_joi_1 = require("./TargetEntitySchema.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.EntitySpecificationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('EntitySpecification'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    constraint: Joi.array().items(Joi.object(ConstraintRef_joi_1.ConstraintRefJoi)),
    description: Joi.string(),
    entitySpecRelationship: Joi.array().items(Joi.object(EntitySpecificationRelationship_joi_1.EntitySpecificationRelationshipJoi)),
    href: Joi.string().uri(),
    id: Joi.string(),
    isBundle: Joi.boolean(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    specCharacteristic: Joi.array().items(Joi.object(CharacteristicSpecification_joi_1.CharacteristicSpecificationJoi)),
    targetEntitySchema: Joi.object(TargetEntitySchema_joi_1.TargetEntitySchemaJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=EntitySpecification.joi.js.map