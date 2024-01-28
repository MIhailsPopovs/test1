"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion_UpdateModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.Promotion_UpdateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    description: String,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    promotionType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=Promotion_Update.model.js.map