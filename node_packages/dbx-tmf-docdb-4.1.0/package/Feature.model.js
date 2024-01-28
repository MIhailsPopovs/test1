"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureModel = void 0;
const ConstraintRef_model_1 = require("./ConstraintRef.model");
const Characteristic_model_1 = require("./Characteristic.model");
const FeatureRelationship_model_1 = require("./FeatureRelationship.model");
exports.FeatureModel = {
    constraint: { '#type': [ConstraintRef_model_1.ConstraintRefModel], default: undefined },
    featureCharacteristic: { '#type': [Characteristic_model_1.CharacteristicModel], default: undefined },
    featureRelationship: {
        '#type': [FeatureRelationship_model_1.FeatureRelationshipModel],
        default: undefined,
    },
    id: String,
    isBundle: Boolean,
    isEnabled: Boolean,
    name: String,
};
//# sourceMappingURL=Feature.model.js.map