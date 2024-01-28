"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketSegmentRefJoi = void 0;
const Joi = require("joi");
exports.MarketSegmentRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('MarketSegment'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('MarketSegmentRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=MarketSegmentRef.joi.js.map