"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrder_CreateJoi = void 0;
const Joi = require("joi");
const ProductOrderRef_joi_1 = require("./ProductOrderRef.joi");
exports.CancelProductOrder_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CancelProductOrder'),
    cancellationReason: Joi.string(),
    productOrder: Joi.object(ProductOrderRef_joi_1.ProductOrderRefJoi).required(),
    requestedCancellationDate: Joi.date(),
};
//# sourceMappingURL=CancelProductOrder_Create.joi.js.map