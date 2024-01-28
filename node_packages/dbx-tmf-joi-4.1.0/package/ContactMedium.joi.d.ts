import * as Joi from 'joi';
export declare const ContactMediumJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    characteristic: Joi.ObjectSchema<any>;
    mediumType: Joi.StringSchema;
    preferred: Joi.BooleanSchema;
    validFor: Joi.ObjectSchema<any>;
};
