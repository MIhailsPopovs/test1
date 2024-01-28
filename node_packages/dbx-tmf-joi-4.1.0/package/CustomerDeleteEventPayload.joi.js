"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const Customer_joi_1 = require("./Customer.joi");
exports.CustomerDeleteEventPayloadJoi = {
    customer: Joi.object(Customer_joi_1.CustomerJoi),
};
//# sourceMappingURL=CustomerDeleteEventPayload.joi.js.map