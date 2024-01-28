import * as Joi from 'joi';
export declare const ExportJob_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    completionDate: Joi.DateSchema;
    contentType: Joi.StringSchema;
    creationDate: Joi.DateSchema;
    errorLog: Joi.StringSchema;
    path: Joi.StringSchema;
    query: Joi.StringSchema;
    status: Joi.StringSchema;
    url: Joi.StringSchema;
};
