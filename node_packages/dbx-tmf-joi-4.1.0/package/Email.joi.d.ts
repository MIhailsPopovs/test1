import * as Joi from 'joi';
export declare const EmailJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    templates: Joi.ObjectSchema<any>;
    uid: Joi.StringSchema;
};
