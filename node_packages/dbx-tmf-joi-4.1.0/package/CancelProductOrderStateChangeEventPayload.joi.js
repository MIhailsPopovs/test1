"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const CancelProductOrder_joi_1 = require("./CancelProductOrder.joi");
exports.CancelProductOrderStateChangeEventPayloadJoi = {
    cancelProductOrder: Joi.object(CancelProductOrder_joi_1.CancelProductOrderJoi),
};
//# sourceMappingURL=CancelProductOrderStateChangeEventPayload.joi.js.map