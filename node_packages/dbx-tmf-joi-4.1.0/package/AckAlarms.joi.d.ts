import * as Joi from 'joi';
export declare const AckAlarmsJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    ackSystemId: Joi.StringSchema;
    ackTime: Joi.DateSchema;
    ackUserId: Joi.StringSchema;
    ackedAlarm: Joi.ArraySchema;
    alarmPattern: Joi.ArraySchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    state: Joi.StringSchema;
};
