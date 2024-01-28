"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const Customer_joi_1 = require("./Customer.joi");
exports.CustomerCreateEventPayloadJoi = {
    customer: Joi.object(Customer_joi_1.CustomerJoi),
};
//# sourceMappingURL=CustomerCreateEventPayload.joi.js.map