import * as Joi from 'joi';
export declare const ClearAlarms_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alarmClearedTime: Joi.DateSchema;
    alarmPattern: Joi.ArraySchema;
    clearSystemId: Joi.StringSchema;
    clearUserId: Joi.StringSchema;
    clearedAlarm: Joi.ArraySchema;
    state: Joi.StringSchema;
};
