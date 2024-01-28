"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDateTime = exports.generateId = exports.setDateGenerator = exports.setIdGenerator = void 0;
const mongoObjectId = function () {
    var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    return (timestamp +
        'xxxxxxxxxxxxxxxx'
            .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
        })
            .toLowerCase());
};
const generators = {
    idGenerator: mongoObjectId,
    dateTimeGenerator: () => new Date(),
};
function setIdGenerator(idFunc) {
    generators.idGenerator = idFunc;
}
exports.setIdGenerator = setIdGenerator;
function setDateGenerator(idFunc) {
    generators.dateTimeGenerator = idFunc;
}
exports.setDateGenerator = setDateGenerator;
function generateId() {
    return generators.idGenerator();
}
exports.generateId = generateId;
function generateDateTime() {
    return generators.dateTimeGenerator();
}
exports.generateDateTime = generateDateTime;
//# sourceMappingURL=tools.js.map