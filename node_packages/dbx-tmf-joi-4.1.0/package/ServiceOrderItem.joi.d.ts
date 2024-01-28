import * as Joi from 'joi';
export declare const ServiceOrderItemJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    action: Joi.StringSchema;
    appointment: Joi.ObjectSchema<any>;
    errorMessage: Joi.ArraySchema;
    id: Joi.StringSchema;
    quantity: Joi.NumberSchema;
    service: Joi.ObjectSchema<any>;
    serviceOrderItem: Joi.ArraySchema;
    serviceOrderItemRelationship: Joi.ArraySchema;
    state: Joi.StringSchema;
};
