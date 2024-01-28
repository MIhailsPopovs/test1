import * as Joi from 'joi';
export declare const SubscriptionJoi: {
    callback: Joi.StringSchema;
    characteristic: Joi.ObjectSchema<any>;
    id: Joi.StringSchema;
    query: Joi.StringSchema;
    userId: Joi.StringSchema;
};
