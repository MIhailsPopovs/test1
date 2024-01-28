import * as Joi from 'joi';
export declare const FeatureRelationshipJoi: {
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
