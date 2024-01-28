"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationRefModel = void 0;
const TargetProductSchema_model_1 = require("./TargetProductSchema.model");
exports.ProductSpecificationRefModel = {
    '@baseType': String,
    '@referredType': String,
    '@schemaLocation': String,
    '@type': String,
    href: String,
    id: String,
    name: String,
    targetProductSchema: TargetProductSchema_model_1.TargetProductSchemaModel,
    version: Number,
};
//# sourceMappingURL=ProductSpecificationRef.model.js.map