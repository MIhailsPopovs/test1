import * as Joi from 'joi';
export declare const ActivityJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    activityType: Joi.StringSchema;
    date: Joi.DateSchema;
    remarks: Joi.StringSchema;
    user: Joi.StringSchema;
};
