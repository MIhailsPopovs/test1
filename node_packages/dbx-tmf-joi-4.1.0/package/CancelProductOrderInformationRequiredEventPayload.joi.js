"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderInformationRequiredEventPayloadJoi = void 0;
const Joi = require("joi");
const CancelProductOrder_joi_1 = require("./CancelProductOrder.joi");
exports.CancelProductOrderInformationRequiredEventPayloadJoi = {
    cancelProductOrder: Joi.object(CancelProductOrder_joi_1.CancelProductOrderJoi),
};
//# sourceMappingURL=CancelProductOrderInformationRequiredEventPayload.joi.js.map