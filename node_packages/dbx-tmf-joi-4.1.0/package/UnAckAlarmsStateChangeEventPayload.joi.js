"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const UnAckAlarms_joi_1 = require("./UnAckAlarms.joi");
exports.UnAckAlarmsStateChangeEventPayloadJoi = {
    unAckAlarms: Joi.object(UnAckAlarms_joi_1.UnAckAlarmsJoi),
};
//# sourceMappingURL=UnAckAlarmsStateChangeEventPayload.joi.js.map