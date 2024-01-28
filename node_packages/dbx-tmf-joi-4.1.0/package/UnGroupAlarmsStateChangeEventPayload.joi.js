"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarmsStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const UnGroupAlarms_joi_1 = require("./UnGroupAlarms.joi");
exports.UnGroupAlarmsStateChangeEventPayloadJoi = {
    unGroupAlarms: Joi.object(UnGroupAlarms_joi_1.UnGroupAlarmsJoi),
};
//# sourceMappingURL=UnGroupAlarmsStateChangeEventPayload.joi.js.map