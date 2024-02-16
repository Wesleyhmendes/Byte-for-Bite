const fs = require('fs');
const path = require('path');

export function implementSeeder() {
  const filePath = path.join(__dirname, '..', 'data', 'followers.json');

    const jsonData = fs.readFileSync(filePath);
    const [followers] = JSON.parse(jsonData);

    return followers;
}