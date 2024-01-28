"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionActionJoi = void 0;
const Joi = require("joi");
const EntityRef_joi_1 = require("./EntityRef.joi");
exports.PromotionActionJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('PromotionAction'),
    actionEntityRef: Joi.object(EntityRef_joi_1.EntityRefJoi),
    actionType: Joi.string().required(),
    actionValue: Joi.string(),
    id: Joi.string(),
};
//# sourceMappingURL=PromotionAction.joi.js.map