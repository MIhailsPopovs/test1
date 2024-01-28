"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alarm_CreateJoi = void 0;
const Joi = require("joi");
const AffectedService_joi_1 = require("./AffectedService.joi");
const AlarmedObject_joi_1 = require("./AlarmedObject.joi");
const Comment_joi_1 = require("./Comment.joi");
const AlarmRef_joi_1 = require("./AlarmRef.joi");
const CrossedThresholdInformation_joi_1 = require("./CrossedThresholdInformation.joi");
const RelatedPlaceRefOrValue_joi_1 = require("./RelatedPlaceRefOrValue.joi");
exports.Alarm_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('Alarm'),
    ackState: Joi.string(),
    ackSystemId: Joi.string(),
    ackUserId: Joi.string(),
    affectedService: Joi.array().items(Joi.object(AffectedService_joi_1.AffectedServiceJoi)),
    alarmChangedTime: Joi.date(),
    alarmClearedTime: Joi.date(),
    alarmDetails: Joi.string(),
    alarmEscalation: Joi.boolean(),
    alarmRaisedTime: Joi.date().required(),
    alarmReportingTime: Joi.date(),
    alarmType: Joi.string().required(),
    alarmedObject: Joi.object(AlarmedObject_joi_1.AlarmedObjectJoi).required(),
    alarmedObjectType: Joi.string(),
    clearSystemId: Joi.string(),
    clearUserId: Joi.string(),
    comment: Joi.array().items(Joi.object(Comment_joi_1.CommentJoi)),
    correlatedAlarm: Joi.array().items(Joi.object(AlarmRef_joi_1.AlarmRefJoi)),
    crossedThresholdInformation: Joi.object(CrossedThresholdInformation_joi_1.CrossedThresholdInformationJoi),
    externalAlarmId: Joi.string(),
    isRootCause: Joi.boolean(),
    parentAlarm: Joi.array().items(Joi.object(AlarmRef_joi_1.AlarmRefJoi)),
    perceivedSeverity: Joi.string().required(),
    place: Joi.array().items(Joi.object(RelatedPlaceRefOrValue_joi_1.RelatedPlaceRefOrValueJoi)),
    plannedOutageIndicator: Joi.string(),
    probableCause: Joi.string().required(),
    proposedRepairedActions: Joi.string(),
    reportingSystemId: Joi.string(),
    serviceAffecting: Joi.boolean(),
    sourceSystemId: Joi.string().required(),
    specificProblem: Joi.string(),
    state: Joi.string().required(),
};
//# sourceMappingURL=Alarm_Create.joi.js.map