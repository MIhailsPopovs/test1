import * as Joi from 'joi';
export declare const UnGroupAlarmsJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alarmChangedTime: Joi.DateSchema;
    correlatedAlarm: Joi.ArraySchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    parentAlarm: Joi.ObjectSchema<any>;
    sourceSystemId: Joi.StringSchema;
    state: Joi.StringSchema;
    unGroupedAlarm: Joi.ArraySchema;
};
