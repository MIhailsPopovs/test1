import * as Joi from 'joi';
export declare const ProductSpecificationRelationshipRefJoi: {
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    productSpecification: Joi.ObjectSchema<any>;
    productSpecification2: Joi.ObjectSchema<any>;
    relationshipType: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
