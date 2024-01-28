import * as Joi from 'joi';
export declare const CommentAlarmsStateChangeEventJoi: {
    correlationId: Joi.StringSchema;
    description: Joi.StringSchema;
    domain: Joi.StringSchema;
    event: Joi.ObjectSchema<any>;
    eventId: Joi.StringSchema;
    eventTime: Joi.DateSchema;
    eventType: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    priority: Joi.StringSchema;
    timeOcurred: Joi.DateSchema;
    title: Joi.StringSchema;
};
