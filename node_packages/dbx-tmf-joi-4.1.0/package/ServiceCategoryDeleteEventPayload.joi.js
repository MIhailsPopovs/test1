"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCategory_joi_1 = require("./ServiceCategory.joi");
exports.ServiceCategoryDeleteEventPayloadJoi = {
    serviceCategory: Joi.object(ServiceCategory_joi_1.ServiceCategoryJoi),
};
//# sourceMappingURL=ServiceCategoryDeleteEventPayload.joi.js.map