import * as Joi from 'joi';
export declare const ResourceRelationshipJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    resourceRelationshipCharacteristic: Joi.ArraySchema;
};
