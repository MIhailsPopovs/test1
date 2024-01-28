import * as Joi from 'joi';
export declare const CharacteristicSpecificationBaseJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    '@valueSchemaLocation': Joi.StringSchema;
    configurable: Joi.BooleanSchema;
    description: Joi.StringSchema;
    extensible: Joi.BooleanSchema;
    id: Joi.StringSchema;
    isUnique: Joi.BooleanSchema;
    maxCardinality: Joi.NumberSchema;
    minCardinality: Joi.NumberSchema;
    name: Joi.StringSchema;
    regex: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
    valueType: Joi.StringSchema;
};
