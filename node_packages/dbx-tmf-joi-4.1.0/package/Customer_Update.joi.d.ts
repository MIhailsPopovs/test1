import * as Joi from 'joi';
export declare const Customer_UpdateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    account: Joi.ArraySchema;
    agreement: Joi.ArraySchema;
    characteristic: Joi.ArraySchema;
    contactMedium: Joi.ArraySchema;
    creditProfile: Joi.ArraySchema;
    engagedParty: Joi.ObjectSchema<any>;
    name: Joi.StringSchema;
    paymentMethod: Joi.ArraySchema;
    relatedParty: Joi.ArraySchema;
    status: Joi.StringSchema;
    statusReason: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
