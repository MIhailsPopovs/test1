import * as Joi from 'joi';
export declare const CommentAlarms_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    alarmPattern: Joi.ArraySchema;
    comment: Joi.ObjectSchema<any>;
    commentedAlarm: Joi.ArraySchema;
    state: Joi.StringSchema;
};
