import * as Joi from 'joi';
export declare const ProductSpecificationRelationshipJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
