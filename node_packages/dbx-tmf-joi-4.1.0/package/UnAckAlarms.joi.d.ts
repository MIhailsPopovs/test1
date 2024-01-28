import * as Joi from 'joi';
export declare const UnAckAlarmsJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    ackSystemId: Joi.StringSchema;
    ackTime: Joi.DateSchema;
    ackUserId: Joi.StringSchema;
    alarmPattern: Joi.ArraySchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    state: Joi.StringSchema;
    unAckedAlarm: Joi.ArraySchema;
};
