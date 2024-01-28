import * as Joi from 'joi';
export declare const CrossedThresholdInformationJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    direction: Joi.StringSchema;
    granularity: Joi.StringSchema;
    indicatorName: Joi.StringSchema;
    indicatorUnit: Joi.StringSchema;
    observedValue: Joi.StringSchema;
    threshold: Joi.ObjectSchema<any>;
    thresholdCrossingDescription: Joi.StringSchema;
};
