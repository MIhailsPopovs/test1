import * as Joi from 'joi';
export declare const ProductSpecification_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    brand: Joi.StringSchema;
    bundledProductSpecification: Joi.ArraySchema;
    description: Joi.StringSchema;
    isBundle: Joi.BooleanSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    productNumber: Joi.StringSchema;
    productSpecCharacteristic: Joi.ArraySchema;
    productSpecificationRelationship: Joi.ArraySchema;
    relatedParty: Joi.ArraySchema;
    resourceSpecification: Joi.ArraySchema;
    serviceSpecification: Joi.ArraySchema;
    targetProductSchema: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
