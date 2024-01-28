"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const CancelServiceOrder_joi_1 = require("./CancelServiceOrder.joi");
exports.CancelServiceOrderStateChangeEventPayloadJoi = {
    cancelServiceOrder: Joi.object(CancelServiceOrder_joi_1.CancelServiceOrderJoi),
};
//# sourceMappingURL=CancelServiceOrderStateChangeEventPayload.joi.js.map