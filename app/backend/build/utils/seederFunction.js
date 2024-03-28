"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.implementSeeder = void 0;
const fs = require('fs');
const path = require('path');
function implementSeeder() {
    const filePath = path.join(__dirname, '..', 'data', 'followers.json');
    const jsonData = fs.readFileSync(filePath);
    const [followers] = JSON.parse(jsonData);
    return followers;
}
exports.implementSeeder = implementSeeder;
//# sourceMappingURL=seederFunction.js.map