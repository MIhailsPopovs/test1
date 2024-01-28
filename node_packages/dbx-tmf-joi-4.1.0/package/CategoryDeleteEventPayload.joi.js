"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const Category_joi_1 = require("./Category.joi");
exports.CategoryDeleteEventPayloadJoi = {
    category: Joi.object(Category_joi_1.CategoryJoi),
};
//# sourceMappingURL=CategoryDeleteEventPayload.joi.js.map