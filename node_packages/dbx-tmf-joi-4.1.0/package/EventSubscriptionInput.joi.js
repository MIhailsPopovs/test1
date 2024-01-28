"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubscriptionInputJoi = void 0;
const Joi = require("joi");
exports.EventSubscriptionInputJoi = {
    callback: Joi.string().required(),
    query: Joi.string(),
};
//# sourceMappingURL=EventSubscriptionInput.joi.js.map