import * as Joi from 'joi';
export declare const Resource_UpdateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    administrativeState: Joi.StringSchema;
    attachment: Joi.ArraySchema;
    category: Joi.StringSchema;
    description: Joi.StringSchema;
    endOperatingDate: Joi.DateSchema;
    name: Joi.StringSchema;
    note: Joi.ArraySchema;
    operationalState: Joi.StringSchema;
    place: Joi.ObjectSchema<any>;
    relatedParty: Joi.ArraySchema;
    resourceCharacteristic: Joi.ArraySchema;
    resourceRelationship: Joi.ArraySchema;
    resourceSpecification: Joi.ObjectSchema<any>;
    resourceStatus: Joi.StringSchema;
    resourceVersion: Joi.StringSchema;
    startOperatingDate: Joi.DateSchema;
    usageState: Joi.StringSchema;
};
