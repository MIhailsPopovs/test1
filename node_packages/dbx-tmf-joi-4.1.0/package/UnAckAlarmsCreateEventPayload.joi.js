"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const UnAckAlarms_joi_1 = require("./UnAckAlarms.joi");
exports.UnAckAlarmsCreateEventPayloadJoi = {
    unAckAlarms: Joi.object(UnAckAlarms_joi_1.UnAckAlarmsJoi),
};
//# sourceMappingURL=UnAckAlarmsCreateEventPayload.joi.js.map