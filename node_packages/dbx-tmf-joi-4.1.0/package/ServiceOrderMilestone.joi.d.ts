import * as Joi from 'joi';
export declare const ServiceOrderMilestoneJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    description: Joi.StringSchema;
    id: Joi.StringSchema;
    message: Joi.StringSchema;
    milestoneDate: Joi.DateSchema;
    name: Joi.StringSchema;
    serviceOrderItem: Joi.ArraySchema;
    status: Joi.StringSchema;
};
