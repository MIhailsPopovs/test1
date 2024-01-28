"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationCharacteristicRelationshipModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductSpecificationCharacteristicRelationshipModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    charSpecSeq: Number,
    href: String,
    id: String,
    name: String,
    relationshipType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ProductSpecificationCharacteristicRelationship.model.js.map