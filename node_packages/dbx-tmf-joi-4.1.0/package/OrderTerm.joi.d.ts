import * as Joi from 'joi';
export declare const OrderTermJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    description: Joi.StringSchema;
    duration: Joi.ObjectSchema<any>;
    name: Joi.StringSchema;
};
