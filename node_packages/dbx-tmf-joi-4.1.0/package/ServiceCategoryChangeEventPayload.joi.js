"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCategory_joi_1 = require("./ServiceCategory.joi");
exports.ServiceCategoryChangeEventPayloadJoi = {
    serviceCategory: Joi.object(ServiceCategory_joi_1.ServiceCategoryJoi),
};
//# sourceMappingURL=ServiceCategoryChangeEventPayload.joi.js.map