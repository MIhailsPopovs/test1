import * as Joi from 'joi';
export declare const QueryProductRecommendation_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ArraySchema;
    channel: Joi.ArraySchema;
    description: Joi.StringSchema;
    instantSyncRecommendation: Joi.BooleanSchema;
    name: Joi.StringSchema;
    place: Joi.ObjectSchema<any>;
    productOrder: Joi.ArraySchema;
    productOrderItem: Joi.ArraySchema;
    recommendationItem: Joi.ArraySchema;
    recommendationType: Joi.StringSchema;
    relatedParty: Joi.ObjectSchema<any>;
    shoppingCart: Joi.ArraySchema;
    shoppingCartItem: Joi.ArraySchema;
    state: Joi.StringSchema;
};