import * as Joi from 'joi';
export declare const ServiceOrderJeopardyAlertJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alertDate: Joi.DateSchema;
    exception: Joi.StringSchema;
    id: Joi.StringSchema;
    jeopardyType: Joi.StringSchema;
    message: Joi.StringSchema;
    name: Joi.StringSchema;
    serviceOrderItem: Joi.ArraySchema;
};
