import * as Joi from 'joi';
export declare const RecommendationItemJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    id: Joi.StringSchema;
    priority: Joi.NumberSchema;
    product: Joi.ObjectSchema<any>;
    productOffering: Joi.ObjectSchema<any>;
};
