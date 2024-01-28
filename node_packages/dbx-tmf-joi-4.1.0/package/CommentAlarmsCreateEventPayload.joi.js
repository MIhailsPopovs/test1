"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const CommentAlarms_joi_1 = require("./CommentAlarms.joi");
exports.CommentAlarmsCreateEventPayloadJoi = {
    commentAlarms: Joi.object(CommentAlarms_joi_1.CommentAlarmsJoi),
};
//# sourceMappingURL=CommentAlarmsCreateEventPayload.joi.js.map