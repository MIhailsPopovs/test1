import * as Joi from 'joi';
export declare const CatalogRequestJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    activityHistory: Joi.ArraySchema;
    baseCatalogRequestId: Joi.StringSchema;
    description: Joi.StringSchema;
    dueDate: Joi.DateSchema;
    id: Joi.StringSchema;
    items: Joi.ArraySchema;
    name: Joi.StringSchema;
    status: Joi.StringSchema;
    type: Joi.StringSchema;
};
