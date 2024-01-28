"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRelationshipModel = void 0;
const Characteristic_model_1 = require("./Characteristic.model");
exports.ResourceRelationshipModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    href: String,
    id: String,
    relationshipType: String,
    resourceRelationshipCharacteristic: {
        '#type': [Characteristic_model_1.CharacteristicModel],
        default: undefined,
    },
};
//# sourceMappingURL=ResourceRelationship.model.js.map