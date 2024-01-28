"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRefJoi = void 0;
const Joi = require("joi");
exports.ItemRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Item'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ItemRef'),
    entityHref: Joi.string(),
    entityId: Joi.string(),
    itemId: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=ItemRef.joi.js.map