"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderJeopardyAlertModel = void 0;
const ServiceOrderItemRef_model_1 = require("./ServiceOrderItemRef.model");
exports.ServiceOrderJeopardyAlertModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alertDate: Date,
    exception: String,
    id: String,
    jeopardyType: String,
    message: String,
    name: String,
    serviceOrderItem: { '#type': [ServiceOrderItemRef_model_1.ServiceOrderItemRefModel], default: undefined },
};
//# sourceMappingURL=ServiceOrderJeopardyAlert.model.js.map