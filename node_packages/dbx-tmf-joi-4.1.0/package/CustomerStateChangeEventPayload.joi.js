"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Customer_joi_1 = require("./Customer.joi");
exports.CustomerStateChangeEventPayloadJoi = {
    customer: Joi.object(Customer_joi_1.CustomerJoi),
};
//# sourceMappingURL=CustomerStateChangeEventPayload.joi.js.map