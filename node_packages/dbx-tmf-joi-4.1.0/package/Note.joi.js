"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteJoi = void 0;
const Joi = require("joi");
exports.NoteJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Note'),
    author: Joi.string(),
    date: Joi.date(),
    id: Joi.string().required(),
    text: Joi.string().required(),
};
//# sourceMappingURL=Note.joi.js.map