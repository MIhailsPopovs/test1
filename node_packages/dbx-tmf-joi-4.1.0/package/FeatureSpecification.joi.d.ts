import * as Joi from 'joi';
export declare const FeatureSpecificationJoi: {
    constraint: Joi.ArraySchema;
    featureSpecCharacteristic: Joi.ArraySchema;
    featureSpecRelationship: Joi.ArraySchema;
    id: Joi.StringSchema;
    isBundle: Joi.BooleanSchema;
    isEnabled: Joi.BooleanSchema;
    name: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
