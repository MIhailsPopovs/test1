import * as Joi from 'joi';
export declare const CharacteristicJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    characteristicRelationship: Joi.ArraySchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    value: Joi.AnySchema<any>;
    valueType: Joi.StringSchema;
};
