import * as Joi from 'joi';
export declare const EntitySpecificationJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    constraint: Joi.ArraySchema;
    description: Joi.StringSchema;
    entitySpecRelationship: Joi.ArraySchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    isBundle: Joi.BooleanSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    relatedParty: Joi.ArraySchema;
    specCharacteristic: Joi.ArraySchema;
    targetEntitySchema: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};