import * as Joi from 'joi';
export declare const ProductOfferingRelationshipRefJoi: {
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    productOffering: Joi.ObjectSchema<any>;
    productOffering2: Joi.ObjectSchema<any>;
    relationshipType: Joi.StringSchema;
    role: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
