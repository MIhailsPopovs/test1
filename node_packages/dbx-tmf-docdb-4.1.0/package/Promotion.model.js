"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const PromotionPattern_model_1 = require("./PromotionPattern.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.PromotionModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    description: String,
    href: String,
    id: String,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    pattern: { '#type': [PromotionPattern_model_1.PromotionPatternModel], default: undefined },
    promotionType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=Promotion.model.js.map