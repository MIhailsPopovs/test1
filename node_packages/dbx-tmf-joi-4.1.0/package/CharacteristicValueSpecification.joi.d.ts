import * as Joi from 'joi';
export declare const CharacteristicValueSpecificationJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    isDefault: Joi.BooleanSchema;
    rangeInterval: Joi.StringSchema;
    regex: Joi.StringSchema;
    unitOfMeasure: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
    value: Joi.AnySchema<any>;
    valueFrom: Joi.NumberSchema;
    valueTo: Joi.NumberSchema;
    valueType: Joi.StringSchema;
};
