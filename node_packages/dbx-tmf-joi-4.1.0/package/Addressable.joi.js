"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressableJoi = void 0;
const Joi = require("joi");
exports.AddressableJoi = {
    href: Joi.string().uri(),
    id: Joi.string(),
};
//# sourceMappingURL=Addressable.joi.js.map