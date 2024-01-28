"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const CancelServiceOrder_joi_1 = require("./CancelServiceOrder.joi");
exports.CancelServiceOrderCreateEventPayloadJoi = {
    cancelServiceOrder: Joi.object(CancelServiceOrder_joi_1.CancelServiceOrderJoi),
};
//# sourceMappingURL=CancelServiceOrderCreateEventPayload.joi.js.map