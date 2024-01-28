import * as Joi from 'joi';
export declare const UnGroupAlarms_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alarmChangedTime: Joi.DateSchema;
    correlatedAlarm: Joi.ArraySchema;
    parentAlarm: Joi.ObjectSchema<any>;
    sourceSystemId: Joi.StringSchema;
    state: Joi.StringSchema;
    unGroupedAlarm: Joi.ArraySchema;
};
