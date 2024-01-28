import * as Joi from 'joi';
export declare const PromotionJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    pattern: Joi.ArraySchema;
    promotionType: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
