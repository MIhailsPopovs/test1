"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const CancelProductOrder_joi_1 = require("./CancelProductOrder.joi");
exports.CancelProductOrderCreateEventPayloadJoi = {
    cancelProductOrder: Joi.object(CancelProductOrder_joi_1.CancelProductOrderJoi),
};
//# sourceMappingURL=CancelProductOrderCreateEventPayload.joi.js.map