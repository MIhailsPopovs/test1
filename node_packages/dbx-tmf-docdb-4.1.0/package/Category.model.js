"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const ProductOfferingRef_model_1 = require("./ProductOfferingRef.model");
const CategoryRef_model_1 = require("./CategoryRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.CategoryModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    description: String,
    href: String,
    id: String,
    isRoot: Boolean,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    parentId: String,
    productOffering: { '#type': [ProductOfferingRef_model_1.ProductOfferingRefModel], default: undefined },
    subCategory: { '#type': [CategoryRef_model_1.CategoryRefModel], default: undefined },
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=Category.model.js.map