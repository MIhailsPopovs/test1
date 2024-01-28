"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicModel = void 0;
const CharacteristicRelationship_model_1 = require("./CharacteristicRelationship.model");
exports.CharacteristicModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    characteristicRelationship: {
        '#type': [CharacteristicRelationship_model_1.CharacteristicRelationshipModel],
        default: undefined,
    },
    id: String,
    name: String,
    value: Object,
    valueType: String,
};
//# sourceMappingURL=Characteristic.model.js.map