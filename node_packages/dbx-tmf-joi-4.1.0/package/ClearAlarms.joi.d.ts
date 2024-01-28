import * as Joi from 'joi';
export declare const ClearAlarmsJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alarmClearedTime: Joi.DateSchema;
    alarmPattern: Joi.ArraySchema;
    clearSystemId: Joi.StringSchema;
    clearUserId: Joi.StringSchema;
    clearedAlarm: Joi.ArraySchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    state: Joi.StringSchema;
};
