"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectivenessJoi = void 0;
const Joi = require("joi");
exports.SelectivenessJoi = {
    maxNumOfChoiceSelections: Joi.number(),
    minNumOfChoiceSelections: Joi.number().required(),
};
//# sourceMappingURL=Selectiveness.joi.js.map