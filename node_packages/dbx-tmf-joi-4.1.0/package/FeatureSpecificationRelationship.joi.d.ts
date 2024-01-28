import * as Joi from 'joi';
export declare const FeatureSpecificationRelationshipJoi: {
    featureId: Joi.StringSchema;
    name: Joi.StringSchema;
    parentSpecificationHref: Joi.StringSchema;
    parentSpecificationId: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
