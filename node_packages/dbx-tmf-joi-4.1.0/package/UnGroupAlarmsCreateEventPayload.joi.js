"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarmsCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const UnGroupAlarms_joi_1 = require("./UnGroupAlarms.joi");
exports.UnGroupAlarmsCreateEventPayloadJoi = {
    unGroupAlarms: Joi.object(UnGroupAlarms_joi_1.UnGroupAlarmsJoi),
};
//# sourceMappingURL=UnGroupAlarmsCreateEventPayload.joi.js.map