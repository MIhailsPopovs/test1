export declare const UnAckAlarmsModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
    ackSystemId: StringConstructor;
    ackTime: DateConstructor;
    ackUserId: StringConstructor;
    alarmPattern: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            ackState: StringConstructor;
            ackSystemId: StringConstructor;
            ackUserId: StringConstructor;
            affectedService: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                }[];
                default: any;
            };
            alarmChangedTime: DateConstructor;
            alarmClearedTime: DateConstructor;
            alarmDetails: StringConstructor;
            alarmEscalation: BooleanConstructor;
            alarmRaisedTime: DateConstructor;
            alarmReportingTime: DateConstructor;
            alarmType: StringConstructor;
            alarmedObject: {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
            };
            alarmedObjectType: StringConstructor;
            clearSystemId: StringConstructor;
            clearUserId: StringConstructor;
            comment: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    comment: StringConstructor;
                    systemId: StringConstructor;
                    time: DateConstructor;
                    userId: StringConstructor;
                }[];
                default: any;
            };
            correlatedAlarm: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                }[];
                default: any;
            };
            crossedThresholdInformation: {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                direction: StringConstructor;
                granularity: StringConstructor;
                indicatorName: StringConstructor;
                indicatorUnit: StringConstructor;
                observedValue: StringConstructor;
                threshold: {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                };
                thresholdCrossingDescription: StringConstructor;
            };
            externalAlarmId: StringConstructor;
            href: StringConstructor;
            id: NumberConstructor;
            isRootCause: BooleanConstructor;
            parentAlarm: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                }[];
                default: any;
            };
            perceivedSeverity: StringConstructor;
            place: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                    role: StringConstructor;
                }[];
                default: any;
            };
            plannedOutageIndicator: StringConstructor;
            probableCause: StringConstructor;
            proposedRepairedActions: StringConstructor;
            reportingSystemId: StringConstructor;
            serviceAffecting: BooleanConstructor;
            sourceSystemId: StringConstructor;
            specificProblem: StringConstructor;
            state: StringConstructor;
        }[];
        default: any;
    };
    href: StringConstructor;
    id: StringConstructor;
    state: StringConstructor;
    unAckedAlarm: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            ackState: StringConstructor;
            ackSystemId: StringConstructor;
            ackUserId: StringConstructor;
            affectedService: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                }[];
                default: any;
            };
            alarmChangedTime: DateConstructor;
            alarmClearedTime: DateConstructor;
            alarmDetails: StringConstructor;
            alarmEscalation: BooleanConstructor;
            alarmRaisedTime: DateConstructor;
            alarmReportingTime: DateConstructor;
            alarmType: StringConstructor;
            alarmedObject: {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
            };
            alarmedObjectType: StringConstructor;
            clearSystemId: StringConstructor;
            clearUserId: StringConstructor;
            comment: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    comment: StringConstructor;
                    systemId: StringConstructor;
                    time: DateConstructor;
                    userId: StringConstructor;
                }[];
                default: any;
            };
            correlatedAlarm: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                }[];
                default: any;
            };
            crossedThresholdInformation: {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                direction: StringConstructor;
                granularity: StringConstructor;
                indicatorName: StringConstructor;
                indicatorUnit: StringConstructor;
                observedValue: StringConstructor;
                threshold: {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                };
                thresholdCrossingDescription: StringConstructor;
            };
            externalAlarmId: StringConstructor;
            href: StringConstructor;
            id: NumberConstructor;
            isRootCause: BooleanConstructor;
            name: StringConstructor;
            parentAlarm: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                }[];
                default: any;
            };
            perceivedSeverity: StringConstructor;
            place: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                    role: StringConstructor;
                }[];
                default: any;
            };
            plannedOutageIndicator: StringConstructor;
            probableCause: StringConstructor;
            proposedRepairedActions: StringConstructor;
            reportingSystemId: StringConstructor;
            serviceAffecting: BooleanConstructor;
            sourceSystemId: StringConstructor;
            specificProblem: StringConstructor;
            state: StringConstructor;
        }[];
        default: any;
    };
};
