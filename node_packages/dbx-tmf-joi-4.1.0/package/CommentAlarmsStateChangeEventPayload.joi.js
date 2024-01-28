"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const CommentAlarms_joi_1 = require("./CommentAlarms.joi");
exports.CommentAlarmsStateChangeEventPayloadJoi = {
    commentAlarms: Joi.object(CommentAlarms_joi_1.CommentAlarmsJoi),
};
//# sourceMappingURL=CommentAlarmsStateChangeEventPayload.joi.js.map