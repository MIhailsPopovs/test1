import * as Joi from 'joi';
export declare const ProductOfferingCharacteristicValueUseJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    description: Joi.StringSchema;
    id: Joi.StringSchema;
    maxCardinality: Joi.NumberSchema;
    minCardinality: Joi.NumberSchema;
    name: Joi.StringSchema;
    productOfferingCharacteristicValue: Joi.ArraySchema;
    productSpecification: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
    valueType: Joi.StringSchema;
};
