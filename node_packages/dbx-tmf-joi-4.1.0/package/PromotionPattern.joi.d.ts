import * as Joi from 'joi';
export declare const PromotionPatternJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    action: Joi.ArraySchema;
    criteriaGroup: Joi.ArraySchema;
    criteriaGroupLogicalRelationship: Joi.StringSchema;
    description: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    priority: Joi.NumberSchema;
    validFor: Joi.ObjectSchema<any>;
};
