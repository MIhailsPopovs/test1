import * as Joi from 'joi';
export declare const FeatureSpecificationCharacteristicRelationshipJoi: {
    characteristicId: Joi.StringSchema;
    featureId: Joi.StringSchema;
    name: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    resourceSpecificationHref: Joi.StringSchema;
    resourceSpecificationId: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
