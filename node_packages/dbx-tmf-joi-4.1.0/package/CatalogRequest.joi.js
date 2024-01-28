"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogRequestJoi = void 0;
const Joi = require("joi");
const Activity_joi_1 = require("./Activity.joi");
const ActionItemRef_joi_1 = require("./ActionItemRef.joi");
exports.CatalogRequestJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('CatalogRequest'),
    activityHistory: Joi.array().items(Joi.object(Activity_joi_1.ActivityJoi)).forbidden(),
    baseCatalogRequestId: Joi.string(),
    description: Joi.string(),
    dueDate: Joi.date(),
    id: Joi.string().required(),
    items: Joi.array().items(Joi.object(ActionItemRef_joi_1.ActionItemRefJoi)),
    name: Joi.string().required(),
    status: Joi.string(),
    type: Joi.string(),
};
//# sourceMappingURL=CatalogRequest.joi.js.map