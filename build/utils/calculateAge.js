"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAge = void 0;
function calculateAge(birthday) {
    const diff_ms = Date.now() - birthday.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
exports.calculateAge = calculateAge;
//# sourceMappingURL=calculateAge.js.map