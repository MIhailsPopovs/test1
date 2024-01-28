"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const AckAlarms_joi_1 = require("./AckAlarms.joi");
exports.AckAlarmsStateChangeEventPayloadJoi = {
    ackAlarms: Joi.object(AckAlarms_joi_1.AckAlarmsJoi),
};
//# sourceMappingURL=AckAlarmsStateChangeEventPayload.joi.js.map