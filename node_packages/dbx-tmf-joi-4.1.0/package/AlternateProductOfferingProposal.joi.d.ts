import * as Joi from 'joi';
export declare const AlternateProductOfferingProposalJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alternateActivationDate: Joi.DateSchema;
    alternateProduct: Joi.ObjectSchema<any>;
    alternateProductOffering: Joi.ObjectSchema<any>;
    id: Joi.StringSchema;
};
