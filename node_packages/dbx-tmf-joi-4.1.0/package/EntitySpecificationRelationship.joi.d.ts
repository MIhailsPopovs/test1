import * as Joi from 'joi';
export declare const EntitySpecificationRelationshipJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    associationSpec: Joi.ObjectSchema<any>;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    role: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
