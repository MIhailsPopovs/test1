import * as Joi from 'joi';
export declare const CharacteristicSpecificationJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    '@valueSchemaLocation': Joi.StringSchema;
    charSpecRelationship: Joi.ArraySchema;
    characteristicValueSpecification: Joi.ArraySchema;
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
