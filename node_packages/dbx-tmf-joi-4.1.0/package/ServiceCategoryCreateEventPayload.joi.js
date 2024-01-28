"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCategory_joi_1 = require("./ServiceCategory.joi");
exports.ServiceCategoryCreateEventPayloadJoi = {
    serviceCategory: Joi.object(ServiceCategory_joi_1.ServiceCategoryJoi),
};
//# sourceMappingURL=ServiceCategoryCreateEventPayload.joi.js.map