const fs = require('fs');
const path = 'src/app/api/loan-applications/route.ts';
let content = fs.readFileSync(path, 'utf8');
content = content.replace('idType: formData.idType,', "idType: formData.idType || 'Other',");
fs.writeFileSync(path, content);
console.log('Fixed idType');
