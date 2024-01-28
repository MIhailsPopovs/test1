"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentRefOrValueModel = void 0;
const Quantity_model_1 = require("./Quantity.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.AttachmentRefOrValueModel = {
    '@baseType': String,
    '@referredType': String,
    '@schemaLocation': String,
    '@type': String,
    attachmentType: String,
    content: String,
    description: String,
    href: String,
    id: String,
    lifecycleStatus: String,
    mimeType: String,
    name: String,
    size: Quantity_model_1.QuantityModel,
    url: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=AttachmentRefOrValue.model.js.map