"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubscriptionJoi = void 0;
const Joi = require("joi");
exports.EventSubscriptionJoi = {
    callback: Joi.string().required(),
    id: Joi.string().required(),
    query: Joi.string(),
};
//# sourceMappingURL=EventSubscription.joi.js.map