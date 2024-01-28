"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const Category_joi_1 = require("./Category.joi");
exports.CategoryCreateEventPayloadJoi = {
    category: Joi.object(Category_joi_1.CategoryJoi),
};
//# sourceMappingURL=CategoryCreateEventPayload.joi.js.map