import * as Joi from 'joi';
export declare const AttachmentRefOrValueJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachmentType: Joi.StringSchema;
    content: Joi.StringSchema;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    lifecycleStatus: Joi.StringSchema;
    mimeType: Joi.StringSchema;
    name: Joi.StringSchema;
    size: Joi.ObjectSchema<any>;
    url: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
