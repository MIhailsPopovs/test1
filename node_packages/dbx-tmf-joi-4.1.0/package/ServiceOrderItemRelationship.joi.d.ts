import * as Joi from 'joi';
export declare const ServiceOrderItemRelationshipJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    orderItem: Joi.ObjectSchema<any>;
    relationshipType: Joi.StringSchema;
};
