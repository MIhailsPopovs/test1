"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const GroupAlarms_joi_1 = require("./GroupAlarms.joi");
exports.GroupAlarmsStateChangeEventPayloadJoi = {
    groupAlarms: Joi.object(GroupAlarms_joi_1.GroupAlarmsJoi),
};
//# sourceMappingURL=GroupAlarmsStateChangeEventPayload.joi.js.map