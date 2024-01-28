import * as Joi from 'joi';
export declare const CharacteristicSpecificationRelationshipJoi: {
    characteristicSpecificationId: Joi.StringSchema;
    name: Joi.StringSchema;
    parentSpecificationHref: Joi.StringSchema;
    parentSpecificationId: Joi.StringSchema;
    relationshipType: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
