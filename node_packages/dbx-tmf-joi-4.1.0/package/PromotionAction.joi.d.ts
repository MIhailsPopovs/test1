import * as Joi from 'joi';
export declare const PromotionActionJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    actionEntityRef: Joi.ObjectSchema<any>;
    actionType: Joi.StringSchema;
    actionValue: Joi.StringSchema;
    id: Joi.StringSchema;
};
