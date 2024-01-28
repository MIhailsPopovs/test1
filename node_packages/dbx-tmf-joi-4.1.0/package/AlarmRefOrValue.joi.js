"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmRefOrValueJoi = void 0;
const Joi = require("joi");
const AffectedService_joi_1 = require("./AffectedService.joi");
const AlarmedObject_joi_1 = require("./AlarmedObject.joi");
const Comment_joi_1 = require("./Comment.joi");
const AlarmRef_joi_1 = require("./AlarmRef.joi");
const CrossedThresholdInformation_joi_1 = require("./CrossedThresholdInformation.joi");
const RelatedPlaceRefOrValue_joi_1 = require("./RelatedPlaceRefOrValue.joi");
exports.AlarmRefOrValueJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('AlarmRefOrValue'),
    ackState: Joi.string(),
    ackSystemId: Joi.string(),
    ackUserId: Joi.string(),
    affectedService: Joi.array().items(Joi.object(AffectedService_joi_1.AffectedServiceJoi)),
    alarmChangedTime: Joi.date(),
    alarmClearedTime: Joi.date(),
    alarmDetails: Joi.string(),
    alarmEscalation: Joi.boolean(),
    alarmRaisedTime: Joi.date(),
    alarmReportingTime: Joi.date(),
    alarmType: Joi.string(),
    alarmedObject: Joi.object(AlarmedObject_joi_1.AlarmedObjectJoi),
    alarmedObjectType: Joi.string(),
    clearSystemId: Joi.string(),
    clearUserId: Joi.string(),
    comment: Joi.array().items(Joi.object(Comment_joi_1.CommentJoi)),
    correlatedAlarm: Joi.array().items(Joi.object(AlarmRef_joi_1.AlarmRefJoi)),
    crossedThresholdInformation: Joi.object(CrossedThresholdInformation_joi_1.CrossedThresholdInformationJoi),
    externalAlarmId: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.number(),
    isRootCause: Joi.boolean(),
    name: Joi.string(),
    parentAlarm: Joi.array().items(Joi.object(AlarmRef_joi_1.AlarmRefJoi)),
    perceivedSeverity: Joi.string(),
    place: Joi.array().items(Joi.object(RelatedPlaceRefOrValue_joi_1.RelatedPlaceRefOrValueJoi)),
    plannedOutageIndicator: Joi.string(),
    probableCause: Joi.string(),
    proposedRepairedActions: Joi.string(),
    reportingSystemId: Joi.string(),
    serviceAffecting: Joi.boolean(),
    sourceSystemId: Joi.string(),
    specificProblem: Joi.string(),
    state: Joi.string(),
};
//# sourceMappingURL=AlarmRefOrValue.joi.js.map