import * as Joi from 'joi';
export declare const CommentJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    comment: Joi.StringSchema;
    systemId: Joi.StringSchema;
    time: Joi.DateSchema;
    userId: Joi.StringSchema;
};
