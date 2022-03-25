const fs = require('fs');
const path = require('path');
const os = require('os');

const data = {

    system: os.arch(),
    user: os.userInfo().username,
    length: os.cpus().length,
    freeMemory: os.freemem(),
    speed:os.cpus().speed,
    version: os.version()
}

const enter = os.EOL

fs.writeFileSync('/home/alina/Рабочий стол/Node.js/npm_test/info.txt', `System: ${JSON.stringify(data.system)}
${enter}User: ${JSON.stringify(data.user)}
${enter}Length: ${JSON.stringify(data.length)}
${enter}Free memory: ${JSON.stringify(data.freeMemory)}
${enter}Speed: ${JSON.stringify(data.speed)}
${enter}Version: ${JSON.stringify(data.version)}`)