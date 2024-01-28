"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Category_joi_1 = require("./Category.joi");
exports.CategoryAttributeValueChangeEventPayloadJoi = {
    category: Joi.object(Category_joi_1.CategoryJoi),
};
//# sourceMappingURL=CategoryAttributeValueChangeEventPayload.joi.js.map