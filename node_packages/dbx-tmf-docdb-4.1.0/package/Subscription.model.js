"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModel = void 0;
const MediumCharacteristic_model_1 = require("./MediumCharacteristic.model");
exports.SubscriptionModel = {
    callback: String,
    characteristic: MediumCharacteristic_model_1.MediumCharacteristicModel,
    id: String,
    query: String,
    userId: String,
};
//# sourceMappingURL=Subscription.model.js.map