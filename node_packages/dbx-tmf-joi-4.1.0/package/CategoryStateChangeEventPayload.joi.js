"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Category_joi_1 = require("./Category.joi");
exports.CategoryStateChangeEventPayloadJoi = {
    category: Joi.object(Category_joi_1.CategoryJoi),
};
//# sourceMappingURL=CategoryStateChangeEventPayload.joi.js.map