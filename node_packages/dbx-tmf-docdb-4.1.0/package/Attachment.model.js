"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentModel = void 0;
const Quantity_model_1 = require("./Quantity.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.AttachmentModel = {
    '@baseType': String,
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
//# sourceMappingURL=Attachment.model.js.map