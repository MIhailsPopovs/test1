"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternateProductOfferingProposalModel = void 0;
const ProductRefOrValue_model_1 = require("./ProductRefOrValue.model");
const ProductOfferingRef_model_1 = require("./ProductOfferingRef.model");
exports.AlternateProductOfferingProposalModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alternateActivationDate: Date,
    alternateProduct: ProductRefOrValue_model_1.ProductRefOrValueModel,
    alternateProductOffering: ProductOfferingRef_model_1.ProductOfferingRefModel,
    id: String,
};
//# sourceMappingURL=AlternateProductOfferingProposal.model.js.map