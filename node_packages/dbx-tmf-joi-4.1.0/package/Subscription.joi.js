"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionJoi = void 0;
const Joi = require("joi");
const MediumCharacteristic_joi_1 = require("./MediumCharacteristic.joi");
exports.SubscriptionJoi = {
    callback: Joi.string().uri().required(),
    characteristic: Joi.object(MediumCharacteristic_joi_1.MediumCharacteristicJoi),
    id: Joi.string().forbidden(),
    query: Joi.string().required(),
    userId: Joi.string().forbidden(),
};
//# sourceMappingURL=Subscription.joi.js.map