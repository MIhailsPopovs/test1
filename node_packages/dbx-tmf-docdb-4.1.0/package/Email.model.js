"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const Templates_model_1 = require("./Templates.model");
exports.EmailModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    description: String,
    href: String,
    id: String,
    name: String,
    templates: Templates_model_1.TemplatesModel,
    uid: String,
};
//# sourceMappingURL=Email.model.js.map