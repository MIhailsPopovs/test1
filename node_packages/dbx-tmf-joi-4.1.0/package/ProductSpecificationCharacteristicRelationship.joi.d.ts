import * as Joi from 'joi';
export declare const ProductSpecificationCharacteristicRelationshipJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    charSpecSeq: Joi.NumberSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
