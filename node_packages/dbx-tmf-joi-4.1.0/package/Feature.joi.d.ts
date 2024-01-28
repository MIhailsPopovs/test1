import * as Joi from 'joi';
export declare const FeatureJoi: {
    constraint: Joi.ArraySchema;
    featureCharacteristic: Joi.ArraySchema;
    featureRelationship: Joi.ArraySchema;
    id: Joi.StringSchema;
    isBundle: Joi.BooleanSchema;
    isEnabled: Joi.BooleanSchema;
    name: Joi.StringSchema;
};
