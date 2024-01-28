"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTermModel = void 0;
const Quantity_model_1 = require("./Quantity.model");
exports.OrderTermModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    description: String,
    duration: Quantity_model_1.QuantityModel,
    name: String,
};
//# sourceMappingURL=OrderTerm.model.js.map