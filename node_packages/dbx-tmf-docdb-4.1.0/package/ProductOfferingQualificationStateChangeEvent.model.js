"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationStateChangeEventModel = void 0;
const ProductOfferingQualificationStateChangeEventPayload_model_1 = require("./ProductOfferingQualificationStateChangeEventPayload.model");
exports.ProductOfferingQualificationStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOfferingQualificationStateChangeEventPayload_model_1.ProductOfferingQualificationStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOfferingQualificationStateChangeEvent.model.js.map