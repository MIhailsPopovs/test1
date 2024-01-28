"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alarm_CreateModel = void 0;
const AffectedService_model_1 = require("./AffectedService.model");
const AlarmedObject_model_1 = require("./AlarmedObject.model");
const Comment_model_1 = require("./Comment.model");
const AlarmRef_model_1 = require("./AlarmRef.model");
const CrossedThresholdInformation_model_1 = require("./CrossedThresholdInformation.model");
const RelatedPlaceRefOrValue_model_1 = require("./RelatedPlaceRefOrValue.model");
exports.Alarm_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    ackState: String,
    ackSystemId: String,
    ackUserId: String,
    affectedService: { '#type': [AffectedService_model_1.AffectedServiceModel], default: undefined },
    alarmChangedTime: Date,
    alarmClearedTime: Date,
    alarmDetails: String,
    alarmEscalation: Boolean,
    alarmRaisedTime: Date,
    alarmReportingTime: Date,
    alarmType: String,
    alarmedObject: AlarmedObject_model_1.AlarmedObjectModel,
    alarmedObjectType: String,
    clearSystemId: String,
    clearUserId: String,
    comment: { '#type': [Comment_model_1.CommentModel], default: undefined },
    correlatedAlarm: { '#type': [AlarmRef_model_1.AlarmRefModel], default: undefined },
    crossedThresholdInformation: CrossedThresholdInformation_model_1.CrossedThresholdInformationModel,
    externalAlarmId: String,
    isRootCause: Boolean,
    parentAlarm: { '#type': [AlarmRef_model_1.AlarmRefModel], default: undefined },
    perceivedSeverity: String,
    place: { '#type': [RelatedPlaceRefOrValue_model_1.RelatedPlaceRefOrValueModel], default: undefined },
    plannedOutageIndicator: String,
    probableCause: String,
    proposedRepairedActions: String,
    reportingSystemId: String,
    serviceAffecting: Boolean,
    sourceSystemId: String,
    specificProblem: String,
    state: String,
};
//# sourceMappingURL=Alarm_Create.model.js.map