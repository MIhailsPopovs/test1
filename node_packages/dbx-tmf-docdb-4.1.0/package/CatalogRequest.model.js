"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogRequestModel = void 0;
const Activity_model_1 = require("./Activity.model");
const ActionItemRef_model_1 = require("./ActionItemRef.model");
exports.CatalogRequestModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    activityHistory: { '#type': [Activity_model_1.ActivityModel], default: undefined },
    baseCatalogRequestId: String,
    description: String,
    dueDate: Date,
    id: String,
    items: { '#type': [ActionItemRef_model_1.ActionItemRefModel], default: undefined },
    name: String,
    status: String,
    type: String,
};
//# sourceMappingURL=CatalogRequest.model.js.map