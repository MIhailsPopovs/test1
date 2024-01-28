import * as Joi from 'joi';
export declare const StatusChangeJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    changeDate: Joi.DateSchema;
    changeReason: Joi.StringSchema;
    status: Joi.StringSchema;
};
