"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Customer_joi_1 = require("./Customer.joi");
exports.CustomerAttributeValueChangeEventPayloadJoi = {
    customer: Joi.object(Customer_joi_1.CustomerJoi),
};
//# sourceMappingURL=CustomerAttributeValueChangeEventPayload.joi.js.map