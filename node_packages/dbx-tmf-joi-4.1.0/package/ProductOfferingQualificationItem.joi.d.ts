import * as Joi from 'joi';
export declare const ProductOfferingQualificationItemJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    action: Joi.StringSchema;
    alternateProductOfferingProposal: Joi.ArraySchema;
    eligibilityUnavailabilityReason: Joi.ArraySchema;
    expectedActivationDate: Joi.DateSchema;
    id: Joi.StringSchema;
    note: Joi.ArraySchema;
    product: Joi.ObjectSchema<any>;
    productOffering: Joi.ObjectSchema<any>;
    qualificationItemRelationship: Joi.ArraySchema;
    qualificationItemResult: Joi.StringSchema;
    state: Joi.StringSchema;
    terminationError: Joi.ArraySchema;
};
