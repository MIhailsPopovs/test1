"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRelationshipModel = void 0;
const ServiceRefOrValue_model_1 = require("./ServiceRefOrValue.model");
const Characteristic_model_1 = require("./Characteristic.model");
exports.ServiceRelationshipModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    href: String,
    id: String,
    relationshipType: String,
    service: ServiceRefOrValue_model_1.ServiceRefOrValueModel,
    serviceRelationshipCharacteristic: {
        '#type': [Characteristic_model_1.CharacteristicModel],
        default: undefined,
    },
};
//# sourceMappingURL=ServiceRelationship.model.js.map