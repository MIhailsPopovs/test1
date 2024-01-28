import * as Joi from 'joi';
export declare const UnAckAlarms_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    ackSystemId: Joi.StringSchema;
    ackTime: Joi.DateSchema;
    ackUserId: Joi.StringSchema;
    alarmPattern: Joi.ArraySchema;
    state: Joi.StringSchema;
    unAckedAlarm: Joi.ArraySchema;
};
