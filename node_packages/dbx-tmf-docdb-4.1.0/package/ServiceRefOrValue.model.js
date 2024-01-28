"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRefOrValueModel = void 0;
const Feature_model_1 = require("./Feature.model");
const Note_model_1 = require("./Note.model");
const RelatedPlaceRefOrValue_model_1 = require("./RelatedPlaceRefOrValue.model");
const RelatedEntityRefOrValue_model_1 = require("./RelatedEntityRefOrValue.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const Characteristic_model_1 = require("./Characteristic.model");
const RelatedServiceOrderItem_model_1 = require("./RelatedServiceOrderItem.model");
const ServiceRelationship_model_1 = require("./ServiceRelationship.model");
const ServiceSpecificationRef_model_1 = require("./ServiceSpecificationRef.model");
const ResourceRef_model_1 = require("./ResourceRef.model");
exports.ServiceRefOrValueModel = {
    '@baseType': String,
    '@referredType': String,
    '@schemaLocation': String,
    '@type': String,
    category: String,
    description: String,
    endDate: Date,
    feature: { '#type': [Feature_model_1.FeatureModel], default: undefined },
    hasStarted: Boolean,
    href: String,
    id: String,
    isBundle: Boolean,
    isServiceEnabled: Boolean,
    isStateful: Boolean,
    name: String,
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    place: { '#type': [RelatedPlaceRefOrValue_model_1.RelatedPlaceRefOrValueModel], default: undefined },
    relatedEntity: {
        '#type': [RelatedEntityRefOrValue_model_1.RelatedEntityRefOrValueModel],
        default: undefined,
    },
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    serviceCharacteristic: { '#type': [Characteristic_model_1.CharacteristicModel], default: undefined },
    serviceDate: String,
    serviceOrderItem: {
        '#type': [RelatedServiceOrderItem_model_1.RelatedServiceOrderItemModel],
        default: undefined,
    },
    serviceRelationship: {
        '#type': [ServiceRelationship_model_1.ServiceRelationshipModel],
        default: undefined,
    },
    serviceSpecification: ServiceSpecificationRef_model_1.ServiceSpecificationRefModel,
    serviceType: String,
    startDate: Date,
    startMode: String,
    state: String,
    supportingResource: { '#type': [ResourceRef_model_1.ResourceRefModel], default: undefined },
    supportingService: { '#type': [Object], default: undefined },
};
//# sourceMappingURL=ServiceRefOrValue.model.js.map