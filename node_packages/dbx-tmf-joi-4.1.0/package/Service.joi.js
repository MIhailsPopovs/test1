"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceJoi = void 0;
const Joi = require("joi");
const Feature_joi_1 = require("./Feature.joi");
const Note_joi_1 = require("./Note.joi");
const RelatedPlaceRefOrValue_joi_1 = require("./RelatedPlaceRefOrValue.joi");
const RelatedEntityRefOrValue_joi_1 = require("./RelatedEntityRefOrValue.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const Characteristic_joi_1 = require("./Characteristic.joi");
const RelatedServiceOrderItem_joi_1 = require("./RelatedServiceOrderItem.joi");
const ServiceRelationship_joi_1 = require("./ServiceRelationship.joi");
const ServiceSpecificationRef_joi_1 = require("./ServiceSpecificationRef.joi");
const ResourceRef_joi_1 = require("./ResourceRef.joi");
const ServiceRefOrValue_joi_1 = require("./ServiceRefOrValue.joi");
exports.ServiceJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Service'),
    category: Joi.string(),
    description: Joi.string(),
    endDate: Joi.date(),
    feature: Joi.array().items(Joi.object(Feature_joi_1.FeatureJoi)),
    hasStarted: Joi.boolean(),
    href: Joi.string().uri(),
    id: Joi.string(),
    isBundle: Joi.boolean(),
    isServiceEnabled: Joi.boolean(),
    isStateful: Joi.boolean(),
    name: Joi.string(),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    place: Joi.array().items(Joi.object(RelatedPlaceRefOrValue_joi_1.RelatedPlaceRefOrValueJoi)),
    relatedEntity: Joi.array().items(Joi.object(RelatedEntityRefOrValue_joi_1.RelatedEntityRefOrValueJoi)),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    serviceCharacteristic: Joi.array().items(Joi.object(Characteristic_joi_1.CharacteristicJoi)),
    serviceDate: Joi.string(),
    serviceOrderItem: Joi.array().items(Joi.object(RelatedServiceOrderItem_joi_1.RelatedServiceOrderItemJoi)),
    serviceRelationship: Joi.array().items(Joi.object(ServiceRelationship_joi_1.ServiceRelationshipJoi)),
    serviceSpecification: Joi.object(ServiceSpecificationRef_joi_1.ServiceSpecificationRefJoi),
    serviceType: Joi.string(),
    startDate: Joi.date(),
    startMode: Joi.string(),
    state: Joi.string().valid('feasibilityChecked', 'designed', 'reserved', 'inactive', 'active', 'terminated'),
    supportingResource: Joi.array().items(Joi.object(ResourceRef_joi_1.ResourceRefJoi)),
    supportingService: Joi.array().items(Joi.object(ServiceRefOrValue_joi_1.ServiceRefOrValueJoi)),
};
//# sourceMappingURL=Service.joi.js.map