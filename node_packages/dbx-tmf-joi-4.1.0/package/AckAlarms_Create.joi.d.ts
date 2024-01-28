import * as Joi from 'joi';
export declare const AckAlarms_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    ackSystemId: Joi.StringSchema;
    ackTime: Joi.DateSchema;
    ackUserId: Joi.StringSchema;
    ackedAlarm: Joi.ArraySchema;
    alarmPattern: Joi.ArraySchema;
    state: Joi.StringSchema;
};
