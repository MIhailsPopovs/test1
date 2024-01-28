import * as Joi from 'joi';
export declare const ProductOfferingQualification_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ObjectSchema<any>;
    channel: Joi.ObjectSchema<any>;
    description: Joi.StringSchema;
    instantSyncQualification: Joi.BooleanSchema;
    note: Joi.ArraySchema;
    place: Joi.ArraySchema;
    productOfferingQualificationItem: Joi.ArraySchema;
    provideAlternative: Joi.BooleanSchema;
    provideOnlyAvailable: Joi.BooleanSchema;
    provideUnavailabilityReason: Joi.BooleanSchema;
    relatedParty: Joi.ArraySchema;
    requestedPOQCompletionDate: Joi.DateSchema;
};
