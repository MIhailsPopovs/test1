"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderMilestoneModel = void 0;
const ServiceOrderItemRef_model_1 = require("./ServiceOrderItemRef.model");
exports.ServiceOrderMilestoneModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    description: String,
    id: String,
    message: String,
    milestoneDate: Date,
    name: String,
    serviceOrderItem: { '#type': [ServiceOrderItemRef_model_1.ServiceOrderItemRefModel], default: undefined },
    status: String,
};
//# sourceMappingURL=ServiceOrderMilestone.model.js.map