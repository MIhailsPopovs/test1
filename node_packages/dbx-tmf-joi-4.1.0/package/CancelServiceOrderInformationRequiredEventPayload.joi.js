"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderInformationRequiredEventPayloadJoi = void 0;
const Joi = require("joi");
const CancelServiceOrder_joi_1 = require("./CancelServiceOrder.joi");
exports.CancelServiceOrderInformationRequiredEventPayloadJoi = {
    cancelServiceOrder: Joi.object(CancelServiceOrder_joi_1.CancelServiceOrderJoi),
};
//# sourceMappingURL=CancelServiceOrderInformationRequiredEventPayload.joi.js.map