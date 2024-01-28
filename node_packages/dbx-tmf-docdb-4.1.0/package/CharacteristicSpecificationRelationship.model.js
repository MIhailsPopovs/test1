"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicSpecificationRelationshipModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.CharacteristicSpecificationRelationshipModel = {
    characteristicSpecificationId: String,
    name: String,
    parentSpecificationHref: String,
    parentSpecificationId: String,
    relationshipType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=CharacteristicSpecificationRelationship.model.js.map