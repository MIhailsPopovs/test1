"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const AckAlarms_joi_1 = require("./AckAlarms.joi");
exports.AckAlarmsCreateEventPayloadJoi = {
    ackAlarms: Joi.object(AckAlarms_joi_1.AckAlarmsJoi),
};
//# sourceMappingURL=AckAlarmsCreateEventPayload.joi.js.map