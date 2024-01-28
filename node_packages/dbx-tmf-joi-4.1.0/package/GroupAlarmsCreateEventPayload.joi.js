"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const GroupAlarms_joi_1 = require("./GroupAlarms.joi");
exports.GroupAlarmsCreateEventPayloadJoi = {
    groupAlarms: Joi.object(GroupAlarms_joi_1.GroupAlarmsJoi),
};
//# sourceMappingURL=GroupAlarmsCreateEventPayload.joi.js.map