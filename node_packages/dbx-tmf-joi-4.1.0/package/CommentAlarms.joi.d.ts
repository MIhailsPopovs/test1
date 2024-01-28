import * as Joi from 'joi';
export declare const CommentAlarmsJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alarmPattern: Joi.ArraySchema;
    comment: Joi.ObjectSchema<any>;
    commentedAlarm: Joi.ArraySchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    state: Joi.StringSchema;
};
